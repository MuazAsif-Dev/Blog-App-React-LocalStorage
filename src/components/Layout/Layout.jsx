import { Outlet } from "react-router-dom";

import Header from "../Header";

import "./Layout.css";

const Layout = () => {
  return (
    <main className="container">
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
