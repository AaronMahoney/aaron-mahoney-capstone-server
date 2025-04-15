import express from "express";
import knex from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const sayings = await knex("sayings");
        res.status(200).json(sayings);
    } catch (error) {
        console.log("Error getting sayings", error)
        res.status(500).json({ error: "Failed to get sayings" })
    }
});

router.get("/:id", async (req, res) => {

    const id = Number(req.params.id);

    try {
        const saying = await knex("sayings").where({ id }).first();

        if (saying) {
            res.status(200).json(saying);
        } else {
            res.status(404).json({ error: "Saying not found" });
        }
    } catch (error) {
        console.log("Error getting saying by ID", error);
        res.status(500).json({ error: "Failed to get saying" });
    }
});

export default router;