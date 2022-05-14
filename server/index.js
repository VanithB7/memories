import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
import postRoute from "./routes/posts.js";
const PORT = process.env.PORT || 5000;

dotenv.config();

// database
mongoose
  .connect(process.env.DATABASE_CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is up and running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`database not connected${error}`);
  });

//middleware
app.use(express.json());
app.use(cors());

// route
app.get("/", (req, res) => {
  res.status(200).json({ message: "app is working" });
});

// post route
app.use("/api/v1", postRoute);
