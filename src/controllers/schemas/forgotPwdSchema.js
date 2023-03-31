import * as yup from "yup";

export const forgotPwdSchema = yup.object({
  email: yup.string().email().required("Email obligatorio."),
});
