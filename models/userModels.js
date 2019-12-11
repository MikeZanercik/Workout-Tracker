const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    plan: {
        type: String,
        trim: true,
        required: "Plan name is required"
    },
    Workout: {
        type: String,
        trim: true,
        required: "workout is required"
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;