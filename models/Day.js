const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema({
    date: { type: Date, default: Date.now },
    meal: { type: Schema.Types.DocumentArray, ref: "Meal" },
    water: { type: Schema.Types.DocumentArray, ref: "Water" },
    exercise: { type: Schema.Types.DocumentArray, ref: "Exercise" },
});

const Day = mongoose.model("Day", daySchema);

module.exports = Day;