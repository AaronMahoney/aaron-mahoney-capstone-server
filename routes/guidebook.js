import express from "express";

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

        const newComment = await Comment.create({ name, location, comment });

        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ error: "Failed to save comment" });
    }
});

export default router;