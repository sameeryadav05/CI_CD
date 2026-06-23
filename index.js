import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/health", (req, res) => {
    res.send("All is Well!");
});

app.get("/", (req, res) => {
    let { name = "Anonymous"} = req.query;

    res.send(`Hello, ${name}`);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});