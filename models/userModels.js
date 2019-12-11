const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    workout: {
        type: String,
        required: true
    },
})

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;