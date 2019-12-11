const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan")

const PORT = process.env.PORT || 3000;

// path to schema file
const User = require("./models/userModels");
const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true })

// ROUTES HERE



app.post("/submit", ({ body }, res) => {
    User.create(body)
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });
// ==============================================

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
});