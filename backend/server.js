import {connectDb} from "../backend/config/db.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
connectDb();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello World Server is running!");
})

app.listen(PORT, () => {
    console.log(`Server is running on local host:${PORT}`)
})