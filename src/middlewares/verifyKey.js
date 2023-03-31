import { UserModel, SecureKeyModel, PwdTokenModel } from "../models/index.js";

export const verifyKey = async (req, res, next) => {
  console.log(req.query);
  const { key, email } = req.query;
  if (!key || !email)
    return res.status(401).json({ msg: "Parametros inválidos", error: true });

  const user = await UserModel.findOne({ email });
  if (!user)
    return res
      .status(400)
      .json({ msg: "No se encontró un usuario con ese email", error: true });

  const secureKey = await SecureKeyModel.findOne({ owner: user.email });
  if (!secureKey)
    return res.status(400).json({
      msg: "Es probable que tu cuenta ya esté verificada.",
      error: true,
    });

  req.user = user;
  next();
};

export const verifyNewPwdKey = async (req, res, next) => {
  const { token, uuid } = req.body;
  if (!token || !uuid)
    return res.status(401).json({ msg: "Parametros inválidos", error: true });

  const user = await UserModel.findOne({ uuid });
  if (!user)
    return res
      .status(400)
      .json({ msg: "No se encontró un usuario con ese id", error: true });

  const pwdToken = await PwdTokenModel.findOne({ owner: user.email });
  if (!pwdToken) {
    return res.status(400).json({
      msg: "El token para cambiar la contraseña es incorrecto.",
      error: true,
    });
  } else {
    req.user = user;
    next();
  }
};
