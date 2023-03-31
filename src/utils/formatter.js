import { v4 as uuidv4 } from "uuid";

export const userFormatter = (user) => {
  return {
    uuid: user.uuid,
    username: user.username,
    email: user.email,
    phone: user.phone,
    birthDate: user.birthDate,
    avatar: user.avatar,
    verified: user.verified,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

export const newUserFormatter = (user) => {
  const { username, email, password } = user;
  return {
    uuid: uuidv4(),
    username,
    email,
    password,
    phone: "",
    birthdate: "",
    avatar: "",
    verified: false,
  };
};
