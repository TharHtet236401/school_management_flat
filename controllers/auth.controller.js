import User from "../models/user.model.js";
import { fMsg, encode, comPass, decode, genToken } from "../utils/libby.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
  try {
    const { userName, email, password, phone, confirmPassword } = req.body;

    const hashedPassword = encode(password);

    const newUser = {
      userName,
      email,
      password: hashedPassword,
      phone,
    };
    const user = await User.create(newUser);

    const toEncrypt = {
      _id: user._id,
      email: user.email,
      role: user.role,
      class: user.class,
    };

    const token = genToken(toEncrypt);
    fMsg(res, "Registered Successfully", { user, token });
  } catch (error) {
    fMsg(res, "Registration failed", error.message);
  }
};