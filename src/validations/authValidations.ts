import * as yup from "yup";

export const nameSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Please write your full name")
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name must be at most 50 characters long")
    .matches(
      /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
      "Please enter a valid name"
    ),
});

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("Please write your email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please provide valid email address"
    ),
});

export const passwordSchema = yup.object().shape({
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[A-Z])(?=.*[@#$%^&+=])(?!.*\s).{8,}$/,
      "Password must contain at least one uppercase, one lowercase, one number and one special character"
    ),
});

export const confirmPasswordSchema = yup.object().shape({
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Please confirm your password"),
});

export const countrySchema = yup.object().shape({
  country: yup.string().required("Country is required"),
});

export const signUpSchema = yup.object().shape({
  ...emailSchema.fields,
  ...nameSchema.fields,
  ...passwordSchema.fields,
  ...confirmPasswordSchema.fields,
  ...countrySchema.fields,
});

export const loginSchema = yup.object().shape({
  ...emailSchema.fields,
  ...passwordSchema.fields,
});
