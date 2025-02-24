import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commentsFilePath = path.join(__dirname, "../data/comments.json");

router.post("/", async (req, res) => {
    try {
        let { name, location, comment } = req.body;

        name = name?.trim();
        location = location?.trim();
        comment = comment?.trim();

        if (!name || !location || !comment) {
            return res.status(400).json({ error: "All fields are required." });
        }

        if (name.length > 25) {
            return res.status(400).json({ error: "Name must be under 25 characters." });
        }

        if (location.length > 50) {
            return res.status(400).json({ error: "Location must be under 50 characters." });
        }

        if (comment.length > 200) {
            return res.status(400).json({ error: "Comment must be under 200 characters." });
        }

        const comments = JSON.parse(fs.readFileSync(commentsFilePath));
        const newComment = { name, location, comment };
        comments.push(newComment);

        fs.writeFileSync(commentsFilePath, JSON.stringify(comments, null, 2));

        res.status(201).json(newComment);

    } catch (error) {
        console.error("Error processing the comment:", error);
        res.status(500).json({ error: "Failed to save comment" });
    }
});

router.get("/comments", (req, res) => {
    fs.readFile(commentsFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading comments file' });
        }
        res.json(JSON.parse(data));
    });
});

export default router;