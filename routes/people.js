import express from "express";
import knex from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const people = await knex("people").select("*");
        res.status(200).json(people);
    } catch (error) {
        console.error("Error getting people:", error);
        res.status(500).json({ error: "Failed to get people" });
    }
});

router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);

    try {
        const rows = await knex('people')
            .leftJoin('people_history', 'people.id', 'people_history.person_id')
            .select(
                'people.id',
                'people.name',
                'people.occupation',
                'people.picture',
                'people_history.history_text'
            )
            .where('people.id', id);

        if (!rows || rows.length === 0) {
            return res.status(404).json({ error: "Person not found" });
        }

        const { id: personId, name, occupation, picture } = rows[0];
        const history = rows.map(row => row.history_text).filter(Boolean);

        res.status(200).json({ id: personId, name, occupation, picture, history });

    } catch (error) {
        console.error("Error getting person by ID:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;