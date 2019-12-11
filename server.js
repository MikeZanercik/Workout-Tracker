const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models/userModels");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });

db.Workout.create({ name: "Workout Plan" })
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({message}) => {
    console.log(message);
  });


// app.post("/", ({body}, res) => {
    
// })
// ==============================================

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });