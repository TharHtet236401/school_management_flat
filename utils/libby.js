import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const fMsg = (res, msg, result = {}) => {
  res.status(200).json({ con: true, msg, result });
};

export const hashPassword = async (password) => {
  const saltRounds = Number(process.env.HASH_SALT); // Convert to number
  if (isNaN(saltRounds) || saltRounds <= 0) {
      throw new Error("HASH_SALT must be a positive number"); // Added validation
  }
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};