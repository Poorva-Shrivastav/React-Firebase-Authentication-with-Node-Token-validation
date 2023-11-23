import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { verifyToken } from "./middleware/VerifyToken.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(verifyToken);

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("coming from server");
});

app.listen(PORT, () => console.log("listening to port: " + PORT));
