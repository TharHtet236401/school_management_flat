import { Router } from "express";
import { createSchool } from "../controllers/school.controller.js";
import { validateBody } from "../utils/validator.js";
import { SchoolSchema } from "../utils/schema.js";
import { validateToken } from "../utils/validator.js";

const router = Router();

router.post("/create", [validateBody(SchoolSchema.create), validateToken(), createSchool]);

export default router;