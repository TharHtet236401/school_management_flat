import School from "../models/school.model.js";
import User from "../models/user.model.js";
import { fMsg } from "../utils/libby.js";
import { genToken } from "../utils/libby.js";

export const createSchool = async (req, res) => {
  try {
    const { name, address, phone, email } = req.body;
    const user = await User.findById(req.user._id);
    if (!user.schools.includes(name)) {
      user.schools.push(name);
    } else {
      console.log("School already exists");
    }
    if (!user.roles.includes("admin")) {
      user.roles.push("admin");
    }
    user.save();
    const school = new School(req.body);
    await school.save();

    fMsg(res, "School created successfully", school);
  } catch (error) {
    fMsg(res, "School creation failed", error.message);
  }
};
