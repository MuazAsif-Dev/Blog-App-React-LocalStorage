const SECRET_KEY = "W?}j[#-5Bj5xv46{=w";

const generateToken = () => {
  // Encoding SECRET_KEY using base64
  const token = btoa(SECRET_KEY);
  return token;
};

// Verify and decrypt token from sessionStorage
const verifyToken = (token) => {
  if (!token) {
    return false;
  }

  // Decoding token using base64
  const decryptedKey = atob(token);
  return SECRET_KEY === decryptedKey;
};

export { generateToken, verifyToken };
