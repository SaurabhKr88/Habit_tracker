const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());


// ✅ serve index.html
app.use(express.static(path.join(__dirname, "..")));

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

// ✅ GET ALL DATA
app.get("/all", (req, res) => {
    res.json(database);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});