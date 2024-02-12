import { useFormik } from "formik";

import { registerUser } from "../api";

import authSchema from "../schemas/authSchema";
import AuthForm from "../components/AuthForm";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: authSchema,

    onSubmit: async (values, actions) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      const res = registerUser(values);

      if (res) {
        alert(res);
        return;
      }

      actions.resetForm();
      alert("User registration was successful");
    },
  });

  return (
    <AuthForm
      formType={"Register"}
      handleSubmit={formik.handleSubmit}
      isSubmitting={formik.isSubmitting}
      formik={formik}
      errorMsg={true}
    />
  );
};

export default Register;
