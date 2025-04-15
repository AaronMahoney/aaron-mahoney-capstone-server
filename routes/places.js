import express from "express";
import knex from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const places = await knex("places").select("*");
        res.status(200).json(places);
    } catch (error) {
        console.log("Error getting places", error);
        res.status(500).json({ error: "Failed to get places" });
    }
});

router.get("/:id", async (req, res) => {

    const id = Number(req.params.id);

    try {
        const place = await knex("places").where({ id }).first();

        if (place) {
            res.status(200).json(place);
        } else {
            res.status(404).json({ error: "Place not found" });
        }
    } catch (error) {
        console.log("Error getting place by ID", error);
        res.status(500).json({ error: "Failed to get place" });
    }
});

export default router;