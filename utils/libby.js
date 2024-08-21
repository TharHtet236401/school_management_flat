import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const fMsg = (res, msg, result = {}) => {
  res.status(200).json({ con: true, msg, result });
};

export const encode= (payload)=>{
    return bcrypt.hashSync(payload, 10);
    }

export const comPass= (plain, hash) => bcrypt.compareSync(plain, hash)
export const decode=(payload, hash)=>{
    return bcrypt.compareSync(payload, hash);
    }
export const genToken=(payload)=>jwt.sign({
    exp:Math.floor(Date.now()/1000)+(60*60*24),
    data:payload
},process.env.SECRET_KEY)