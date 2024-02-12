import { useContext } from "react";
import { Link } from "react-router-dom";

import { UserContext } from "../../context/UserContext";

import { logout } from "../../api/index";

import "./Header.css";

const Header = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  function logoutUser() {
    logout();
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header className="nav-container">
      <Link to="/" className="logo">
        My Blog
      </Link>
      <nav className="navbar">
        {username && (
          <>
            <Link to="/create" className="nav-links">
              Create Post
            </Link>
            <a onClick={logoutUser} className="nav-links">
              Logout
            </a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login" className="nav-links">
              Login
            </Link>
            <Link to="/register" className="nav-links">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
