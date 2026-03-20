const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let database = {}; // temporary (later DB)

// ✅ SAVE DATA
app.post("/save", (req, res) => {
    console.log("POST HIT ✅", req.body);

    const { date, habits } = req.body;

    database[date] = habits;

    res.json({ message: "Saved successfully" });
});

// ✅ GET DATA
app.get("/get/:date", (req, res) => {
    const date = req.params.date;

    res.json(database[date] || {});
});

// ✅ GET ALL DATA (for stats)
app.get("/all", (req, res) => {
    res.json(database);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});