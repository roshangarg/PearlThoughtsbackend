const Appointment = require("../model/appointmentModel");

const setAppointment = async (req, res) => {
  const { doctorId, patientName, appointmentDate } = req.body;
  try {
    const newAppointment = await Appointment.create({
      doctorId,
      patientName,
      appointmentDate,
    });
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error " });
  }
};

module.exports = setAppointment;
