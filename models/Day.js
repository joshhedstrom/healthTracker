const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema({
    date: { type: Date, default: Date.now },
    meal: { type: Schema.Types.ObjectId, ref: "Meal" },
    water: { type: Schema.Types.ObjectId, ref: "Water" },
    exercise: { type: Schema.Types.ObjectId, ref: "Exercise" },
});

const Day = mongoose.model("Day", daySchema);

module.exports = Day;