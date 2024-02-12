import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const ProtectedRoutes = () => {
  const { userInfo } = useContext(UserContext);

  return userInfo?.username ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
