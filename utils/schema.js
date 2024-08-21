import Joi from "joi";

export const UserSchema={
    register:Joi.object({
        userName:Joi.string().min(3).max(10).required(),
        email:Joi.string().email().required(),
        password:Joi.string().min(8).max(30).required(),
        phone:Joi.string().min(7).max(11).required(),
        confirmPassword:Joi.string().valid(Joi.ref("password")).required()
    }),
    login:Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(8).max(30).required(),
    }),
    addRole:Joi.object({
        userId:Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        roleId:Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        user:Joi.object().optional()
    }),
    addPermit:Joi.object({
        userId:Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        permitId:Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
        user:Joi.object().optional()
    })
}

export const SchoolSchema={
    create:Joi.object({
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        phone:Joi.string().min(7).max(11).required(),
        address:Joi.string().required(),
    })
}