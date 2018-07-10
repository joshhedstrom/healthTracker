const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const daySchema = new Schema({
    date: { type: Date, default: Date.now },
    exercises: [{ type: Schema.Types.ObjectId, ref: "Exercise" }],
    nutrition: { type: Number, default: 0 },
    water: { type: Number, default: 0 }
}); 

const Day = mongoose.model("Day", daySchema);

module.exports = Day;