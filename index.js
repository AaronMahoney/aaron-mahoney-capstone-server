import express from "express";
import cors from "cors";
import "dotenv/config";
import people from "./routes/people.js";
import places from "./routes/places.js";
import sayings from "./routes/sayings.js";
import guidebook from "./routes/guidebook.js";
import signup from "./routes/signup.js";
import login from './routes/login.js';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the server");
});

app.use("/images", express.static("public/images"));

app.use("/people", people);
app.use("/places", places);
app.use("/sayings", sayings);
app.use("/guidebook", guidebook);
app.use("/signup", signup);
app.use('/login', login);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));