import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./connectMongodb.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((err, req, res, next) => {
  err.status = err.status || 505;
  res.status(err.status).json({ con: false, message: err.message });
});

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
