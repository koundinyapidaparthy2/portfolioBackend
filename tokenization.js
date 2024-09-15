import jwt from "jsonwebtoken";

const verifyToken = (token) => {
  try {
    if (!token) return false;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return false;
  }
};

export default verifyToken;
