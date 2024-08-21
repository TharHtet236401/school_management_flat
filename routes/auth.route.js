import { register } from "../controllers/auth.controller.js";
import express from "express";
import { validateBody } from "../utils/validator.js";
import { UserSchema } from "../utils/schema.js";
const router = express.Router();

router.post("/register", validateBody(UserSchema.register), register);

export default router;