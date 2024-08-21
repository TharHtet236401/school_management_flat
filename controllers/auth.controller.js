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
      classes: user.classes,
    };

    const token = genToken(toEncrypt);
    fMsg(res, "Registered Successfully", { user, token });
  } catch (error) {
    fMsg(res, "Registration failed", error.message);
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return fMsg(res, "Login failed", "User not found");
    }

    const isMatch = comPass(password, user.password);
    if (!isMatch) {
      return fMsg(res, "Login failed", "Invalid password");
    }

    const toEncrypt = {
      _id: user._id,
      email: user.email,
      role: user.role,
      classes: user.classes,
    };

    const token = genToken(toEncrypt);
    fMsg(res, "Login Successfully", { user, token });
  } catch (error) {
    fMsg(res, "Login failed", error.message);
  }
};