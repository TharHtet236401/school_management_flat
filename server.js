import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./connectMongodb.js";

const app = express();
const port = process.env.PORT || 3000;

import authRoute from "./routes/auth.route.js";
import schoolRoute from "./routes/school.route.js";
app.use(express.json());
dotenv.config();

app.use("/api/auth", authRoute);
app.use("/api/school", schoolRoute);

app.use((err, req, res, next) => {
  err.status = err.status || 505;
  res.status(err.status).json({ con: false, message: err.message });
});

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
