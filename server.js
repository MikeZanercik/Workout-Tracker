const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/FitnessDB", { useNewUrlParser: true });

db.Exercise.create({ name: "Monday workout", workouts: [] })
  .then(dbExecise => {
    console.log(dbExecise);
  })
  .catch(({ message }) => {
    console.log(message);
  });
  app.get("/exercise", (req, res) => {
    db.Exercise.find({})
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      });
  });


  app.get("/workout", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
        // res.render("workouts")
      })
      .catch(err => {
        res.json(err);
      });
  });
  app.post("/submit", ({ body }, res) => {
    db.Workout.create(body)
      .then(({ _id }) => db.Exercise.findOneAndUpdate({}, { $push: { Workout: _id } }, { new: true }))
      .then(dbExercise => {
        res.json(dbExercise);
      })
      .catch(err => {
        res.json(err);
      });
  });
// ==============================================

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });