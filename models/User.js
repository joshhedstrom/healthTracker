const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, require: true },
  password: { type: String, require: true },
  weight: { type: Number, required: false },
  days: [{ type: Schema.Types.ObjectId, ref: "Day"}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
