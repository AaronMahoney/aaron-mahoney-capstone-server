import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
    try {
        const data = fs.readFileSync("data/places.json", "utf-8");
        const dataParsed = JSON.parse(data);
        res.status(200).json(dataParsed);
    } catch (error) {
        console.log("Error getting data", error)
        res.status(500).json({ error: error })
    }
});