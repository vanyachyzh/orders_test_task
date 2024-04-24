import * as yup from "yup";

export const validationScheme = yup.object().shape({
  email: yup.string().trim().required("Field is required"),
  password: yup.string().trim().required("Field is required"),
  confirmPassword: yup.string().trim().required("Field is required")
});
