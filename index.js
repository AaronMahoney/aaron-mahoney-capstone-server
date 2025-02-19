import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 8080

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the server")
});

app.use("/people", people);
app.use("/places", places);
app.use("/sayings", sayings);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));