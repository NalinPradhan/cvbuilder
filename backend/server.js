const express = require("express");
const mongoose = require("mongoose");
const Cv = require("./model");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your Codespace URL
  methods: "GET,POST,PUT,DELETE", // Allowed methods
  allowedHeaders: "Content-Type,Authorization", // Allowed headers
};

app.use(cors(corsOptions));
app.use(express.json());
const dbURI =
  "mongodb+srv://nalinforodin:Kansasnalin1@theodinproject.w97oi.mongodb.net/cv?retryWrites=true&w=majority&appName=theodinproject";
mongoose
  .connect(dbURI)
  .then((result) => {
    console.log("connected to db");
    app.listen(5000);
  })
  .catch((err) => console.log(err));

app.post("/", (req, res) => {
  const newCv = new Cv(req.body); // Use the form data from req.body
  newCv
    .save()
    .then((result) => {
      console.log("CV added to the database");
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to save CV" });
    });
});

