import "./AuthForm.css";

const AuthForm = ({
  formType,
  handleSubmit,
  isSubmitting,
  formik,
  errorMsg,
}) => {
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h1 className="auth-form-header">{formType}</h1>
      <input
        className="auth-form-input"
        type="text"
        name="username"
        placeholder="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {errorMsg && formik.touched.username && formik.errors.username ? (
        <p className="auth-form-error-msg">{formik.errors.username}</p>
      ) : (
        ""
      )}

      <input
        className="auth-form-input"
        type="password"
        name="password"
        placeholder="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {errorMsg && formik.touched.password && formik.errors.password ? (
        <p className="auth-form-error-msg">{formik.errors.password}</p>
      ) : (
        ""
      )}

      <button disabled={isSubmitting} type="submit" className="auth-form-btn">
        {formType}
      </button>
    </form>
  );
};

export default AuthForm;
