import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const authSchema = yup.object().shape({
  username: yup
    .string()
    .max(20, "Name must be 20 characters or less.")
    .required("Name is required"),

  password: yup
    .string()
    .min(8, "Password must be 8 characters or more.")
    .required("Password is required")
    .matches(
      passwordRules,
      "Password must contain at least one upper case letter (A-Z), at least one lower case letter (a-z) and at least one numeric digit (0-9)."
    ),
});

export default authSchema;
