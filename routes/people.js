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
        const person = await knex('people')
            .where({ id })
            .first();

        if (person) {
            const history = await knex('people_history')
                .where({ person_id: id })
                .select('history_text');

            const historyArray = history.map(entry => entry.history_text);

            res.status(200).json({ ...person, history: historyArray });
        } else {
            res.status(404).json({ error: "Person not found" });
        }
    } catch (error) {
        console.error("Error getting person by ID", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;