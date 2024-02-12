import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";

import Layout from "../components/Layout";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreatePost from "../pages/CreatePost";
import ViewPost from "../pages/ViewPost";
import EditPost from "../pages/EditPost";
import PageNotFound from "../pages/PageNotFound";

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />

          {/* Private Routes */}
          <Route element={<ProtectedRoutes />}>
            <Route index element={<Home />} />
            <Route path={"/create"} element={<CreatePost />} />
            <Route path={"/post/:id"} element={<ViewPost />} />
            <Route path={"/edit/:id"} element={<EditPost />} />
          </Route>

          {/* Invalid Routes */}
          <Route path={"*"} element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
