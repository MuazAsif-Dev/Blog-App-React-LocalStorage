import { useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useFormik } from "formik";

import { UserContext } from "../context/UserContext";
import { loginUser } from "../api";

import AuthForm from "../components/AuthForm";

const Login = () => {
  const [redirect, setRedirect] = useState(false);

  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    if (userInfo?.username) {
      setRedirect(true);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values, actions) => {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      const res = loginUser(values);

      if (!res.login) {
        alert(res.message);
        return;
      }

      setUserInfo({ username: res.username });
      setRedirect(true);

      actions.resetForm();
    },
  });

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <AuthForm
      formType={"Login"}
      handleSubmit={formik.handleSubmit}
      isSubmitting={formik.isSubmitting}
      formik={formik}
    />
  );
};

export default Login;
