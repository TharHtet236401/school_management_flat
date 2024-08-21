import User from "../models/user.model.js";
import { fMsg, hashPassword } from "../utils/libby.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
  try {
    const { userName, email, password, phone, confirmPassword } = req.body;

    const hashedPassword = await hashPassword(password);

    const newUser = {
      userName,
      email,
      password: hashedPassword,
      phone,
    };
    const user = await User.create(newUser);

    fMsg(res, "Registered Successfully", user);
  } catch (error) {
    fMsg(res, "Registration failed", error.message);
  }
};