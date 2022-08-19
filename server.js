const express = require("express");
const app = express();
const jsonData = require("./data.json");

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the world" });
});

app.get("/data", (req, res) => {
    res.json({ message: "success", data: jsonData });
});

app.listen(process.env.PORT || 8000);
