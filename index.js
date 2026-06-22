require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./services/firebaseAdmin");

const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/teste", async (req, res) => {
  try {
    const doc = await db.collection("inicio").doc("principal").get();

    res.json(doc.data());
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});