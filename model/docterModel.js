const { Schema, model } = require("mongoose");

const docterSchema = new Schema({
  name: String,
  specialization: String,
  availability: [Boolean], // Represents availability for each day of the week
  maxPatients: Number,
});

module.exports = model("Doctor", docterSchema);
