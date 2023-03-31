import * as yup from "yup";

export const contactSchema = yup.object({
  username: yup.string().required("Usuario obligatorio."),
  email: yup.string().email().required("Email obligatorio."),
  message: yup.string().required("Mensaje obligatorio."),
});
