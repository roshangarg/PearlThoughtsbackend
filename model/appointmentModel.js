const { Schema, model, default: mongoose } = require("mongoose");

const appointmentSchema = new Schema({
  doctorId: mongoose.Schema.Types.ObjectId, // this will check that the id is valid or not if yes then only create
  patientName: String,
  appointmentDate: Date,
});

module.exports = model("Appointment", appointmentSchema);
