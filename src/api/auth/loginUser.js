import { generateToken, verifyToken } from "./token";

const loginUser = (userData) => {
  const { username, password } = userData;

  const res = {
    message: "",
    login: false,
  };

  if (!username || !password) {
    res.message = "User data is required";
    return res;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((user) => user.username === username);

  if (!user) {
    res.message = "Username not found.";
    return res;
  }

  if (user.password !== password) {
    res.message = "Incorrect password.";
    return res;
  }

  res.message = "Login Successful";
  res.login = true;
  res.username = username;

  const token = generateToken();

  const currentUser = {
    username: username,
    token: token,
  };

  sessionStorage.setItem("currentUser", JSON.stringify(currentUser));

  return res;
};

const checkLoginStatus = () => {
  const currentUserString = sessionStorage.getItem("currentUser");

  if (!currentUserString) {
    return;
  }

  const currentUser = JSON.parse(currentUserString);

  if (!verifyToken(currentUser.token)) {
    return;
  }

  return currentUser.username;
};

const logout = () => {
  sessionStorage.removeItem("currentUser");

  if (sessionStorage.getItem("currentUser") !== null) {
    console.log("Item still exists in session storage");
    return false;
  }

  console.log("Logged out successfully");
  return true;
};

export { loginUser, checkLoginStatus, logout };
