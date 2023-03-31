import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup.string().email().required("Email obligatorio."),
  password: yup.string().required("Contraseña obligatoria."),
});
