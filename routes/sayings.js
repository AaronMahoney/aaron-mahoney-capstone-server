import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", (req, res) => {
    try {
        const data = fs.readFileSync("data/sayings.json", "utf-8");
        const dataParsed = JSON.parse(data);
        res.status(200).json(dataParsed);
    } catch (error) {
        console.log("Error getting data", error)
        res.status(500).json({ error: error })
    }
});

router.get("/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = fs.readFileSync("data/sayings.json", "utf-8");
    const dataParsed = JSON.parse(data);
    const saying = dataParsed.find(item => item.id === id);

    if (saying) {
        res.status(200).json(saying);
    } else {
        res.status(404).json({ error: "Saying not found" });
    }
});

export default router;