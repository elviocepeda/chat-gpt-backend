import { Configuration, OpenAIApi } from "openai";
import { PwdTokenModel, SecureKeyModel, UserModel } from "../models/index.js";
import {
  newUserFormatter,
  userFormatter,
  createRandomBytes,
  mailTransport,
  hashPassword,
  forgotPasswordTemplate,
  verifyAccountTemplate,
  newPwdSuccessTemplate,
  newMessageTemplate,
} from "../utils/index.js";
import {
  loginSchema,
  registerSchema,
  updateSchema,
  updatePasswordSchema,
  contactSchema,
} from "./index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error);
  }

  const user = await UserModel.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(404)
      .json({ msg: "No existe un usuario con ese email.", error: true });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    res.status(401).json({
      msg: "Los datos no coinciden con un usuario registrado.",
      error: true,
    });

  const { uuid } = user;
  const token = jwt.sign({ uuid }, process.env.JWT_PRIVATE_KEY, {
    expiresIn: "120m",
  });

  return res.status(200).json({ token, uuid });
};

const register = async (req, res) => {
  const { error } = registerSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error);
  }

  const alreadyExist = await UserModel.findOne({ email: req.body.email });
  if (alreadyExist)
    return res.status(409).json({ msg: "El email ya existe.", error: true });

  const hashPwd = await hashPassword(req.body.password);
  req.body.password = hashPwd;

  const formattedNewUser = newUserFormatter(req.body);

  const user = new UserModel(formattedNewUser);

  const randomBytes = await createRandomBytes();
  const secureKey = new SecureKeyModel({
    owner: user.email,
    key: randomBytes,
  });

  await user.save();
  await secureKey.save();

  const templateUrl = `http://localhost:3000/verify-account?key=${randomBytes}&email=${user.email}`;

  mailTransport().sendMail({
    from: "mail@mail.com",
    to: user.email,
    subject: "Chat AI: validar cuenta.",
    html: verifyAccountTemplate(templateUrl, user.username),
  });

  res.status(201).json({
    msg: "¡Enviamos un link a tu email para verificar tu cuenta!",
    error: false,
  });
};

const verifyAccount = async (req, res) => {
  const { email } = req.user;
  await UserModel.updateOne({ email }, { $set: { verified: true } });

  await SecureKeyModel.findOneAndDelete({ owner: email });

  return res
    .status(200)
    .json({ msg: "Cuenta verificada con éxito.", error: false });
};

const getUsers = async (req, res) => {
  const allUsers = await UserModel.find({});
  if (allUsers.length > 0) {
    const formattedUsers = allUsers.map((user) => userFormatter(user));
    return res.status(200).json(formattedUsers);
  } else
    res.status(204).json({ msg: "No hay usuarios registrados.", error: true });
};

const updateUser = async (req, res) => {
  const { error } = updateSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error);
  }
  const updated = await UserModel.updateOne(
    { uuid: req.params.uuid },
    { $set: req.body }
  );
  if (!updated)
    res
      .status(400)
      .json({ msg: "No hay un usuario con ese uuid.", error: true });
  else
    res
      .status(200)
      .json({ msg: "Usuario actualizado con éxito.", error: false });
};

const updateUserPassword = async (req, res) => {
  const { error } = updatePasswordSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error);
  }
  const { uuid } = req.params;
  const user = await UserModel.findOne({ uuid });
  if (!user)
    res
      .status(400)
      .json({ msg: "No se encontro un usuario con ese uuid.", error: true });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    res.status(401).json({
      msg: "La contraseña es incorrecta.",
      error: true,
    });

  const isSamePassword = await bcrypt.compare(
    req.body.newPassword,
    user.password
  );
  if (isSamePassword)
    res
      .status(409)
      .json({ msg: "La contraseña nueva es igual a la anterior", error: true });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.newPassword, salt);

  const updated = await UserModel.updateOne(
    { uuid },
    { $set: { password: hashedPassword } }
  );
  if (updated)
    res
      .status(200)
      .json({ msg: "Contraseña actualizada con éxito.", error: false });
};

const forgotPassword = async (req, res) => {
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user)
    res
      .status(400)
      .json({ msg: "No se encontro un usuario con ese email.", error: true });

  const tokenExist = await PwdTokenModel.findOne({ owner: user.email });
  if (tokenExist) {
    res.status(401).json({
      msg: "Debes esperar una hora para obtener un nuevo link y reestablecer la contraseña!",
      error: true,
    });
  } else {
    const randomBytes = await createRandomBytes();
    const setPwdToken = new PwdTokenModel({
      owner: user.email,
      token: randomBytes,
    });
    await setPwdToken.save();
    const templateUrl = `http://localhost:3000/set-password?token=${randomBytes}&uuid=${user.uuid}`;

    mailTransport().sendMail({
      from: "mail@mail.com",
      to: user.email,
      subject: "Chat AI: reestablecer contraseña.",
      html: forgotPasswordTemplate(templateUrl, user.username),
    });

    res.status(200).json({
      msg: "Se envió un link a tu email para reestablecer la contraseña!",
      error: false,
    });
  }
};

const setPassword = async (req, res) => {
  const isSamePassword = await bcrypt.compare(
    req.body.newPassword,
    req.user.password
  );
  if (isSamePassword) {
    res.status(409).json({
      msg: "La contraseña nueva es igual a la anterior",
      error: true,
    });
  } else {
    const hashedNewPwd = await hashPassword(req.body.newPassword);

    await UserModel.updateOne(
      { uuid: req.user.uuid },
      { $set: { password: hashedNewPwd } }
    );
    await PwdTokenModel.findOneAndDelete({ owner: req.user.email });

    const templateUrl = "http://localhost:3000/";

    mailTransport().sendMail({
      from: "mail@mail.com",
      to: req.user.email,
      subject: "Chat AI: contraseña reestablecida!",
      html: newPwdSuccessTemplate(templateUrl, req.user.username),
    });
    res.status(201).json({
      msg: "Contraseña creada con éxito",
      error: false,
    });
  }
};

const deleteUser = async (req, res) => {
  const user = await UserModel.findOne({ uuid: req.params.uuid });
  if (!user)
    return res
      .status(400)
      .json({ msg: "No existe un usuario con ese uuid", error: true });
  else {
    await UserModel.deleteOne({ uuid: user.uuid });
    return res
      .status(200)
      .json({ msg: "Usuario eliminado con éxito.", error: false });
  }
};

const setAvatar = async (req, res) => {
  const { uuid } = req.params;
  const extension = req.file.originalname.split(".").pop();
  const path = `http://localhost:8000/avatar/${uuid}.${extension}`;
  const updated = await UserModel.updateOne(
    { uuid },
    { $set: { avatar: path } }
  );
  if (!updated)
    return res
      .status(400)
      .json({ msg: "No existe un usuario con ese uuid.", error: true });
  else
    res
      .status(200)
      .json({ msg: "Usuario actualizado con éxito.", error: false });
};

const getResponse = async (req, res) => {
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(config);
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 2000,
    temperature: 0,
    prompt: prompt,
  });
  const response = completion.data.choices[0].text;
  res.status(200).json(response);
};

const contactMe = async (req, res) => {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    return res.status(400).json(error);
  }

  try {
    mailTransport().sendMail({
      from: req.body.email,
      to: "cepedaelvio@gmail.com",
      subject: "CHAT-GPT React App: Nuevo mensaje",
      html: newMessageTemplate(req.body),
    });

    res.status(200).json({ msg: "Mensaje enviado con éxito.", error: false });
  } catch (errordata) {
    res.status(400).json({
      errordata,
      msg: "Ocurrió un error. Por favor, intentá mas tarde.",
      error: true,
    });
  }
};

export {
  login,
  register,
  verifyAccount,
  getUsers,
  updateUser,
  updateUserPassword,
  forgotPassword,
  setPassword,
  deleteUser,
  setAvatar,
  getResponse,
  contactMe,
};
