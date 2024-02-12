const registerUser = (userData) => {
  const { username, password } = userData;

  if (!username || !password) {
    return "User data is required";
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.some((user) => user.username === username)) {
    return "Username already taken. Please choose another username.";
  }

  const user = { username, password };
  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));
};

export default registerUser;
