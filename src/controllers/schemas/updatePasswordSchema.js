import * as yup from "yup";

export const updatePasswordSchema = yup.object({
  password: yup.string().required("Contraseña obligatoria."),
  newPassword: yup.string().required("Contraseña nueva obligatoria."),
  confirm: yup
    .string()
    .required("Confirmar contraseña.")
    .oneOf([yup.ref("newPassword"), null], "La contraseña no coincide."),
});
