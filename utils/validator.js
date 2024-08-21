export const validateBody = (schema) => {
    return (req, res, next) => {
        let result = schema.validate(req.body);
        if (result.error) {
            next(new Error(result.error.details[0].message));
        } else {
            // console.log(result);
        }
        next();
    };
}

export let validateToken = () => {
    return (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(401).json({ con: false, msg: "Unauthorized" });
        }
        
        let token = req.headers.authorization.split(" ")[1];

        try {
            let tokenUser = jwt.verify(token, process.env.SECRET_KEY);
            req.user = tokenUser.data; // Attach user info to request body
            
            next();
        } catch (error) {
            console.error("Token verification error:", error.message);
            return res.status(401).json({ con: false, msg: "Invalid token" });
        }
    }
}
