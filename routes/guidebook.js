import express from "express";
import knex from "../db.js";

const router = express.Router();

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

        const [newComment] = await knex("comments")
            .insert({ name, location, comment })

        res.status(201).json(newComment);
    } catch (error) {
        console.error("Error saving comment to database:", error);
        res.status(500).json({ error: "Failed to save comment" });
    }
});

router.get("/comments", async (req, res) => {
    try {
        const comments = await knex("comments").select("*");
        res.status(200).json(comments);
    } catch (error) {
        console.error("Error getting comments:", error);
        res.status(500).json({ error: "Failed to get comments" });
    }
});

export default router;