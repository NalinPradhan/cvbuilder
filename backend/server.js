const express = require("express");
const mongoose = require("mongoose");
const Cv = require("./model");
const cors = require("cors");

const app = express();
const corsOptions = {
  origin: "https://potential-fiesta-7xgp95xxw9cx7r4-5000.app.github.dev/", // Replace with your Codespace URL
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

app.get("/add-cv", (req, res) => {
  const newCv = new Cv({
    name: "Apran Shah",
    email: "aprina@gmial.com",
    phone: "1234567890",
  });
  newCv
    .save()
    .then((result) => {
      console.log("cv added");
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
