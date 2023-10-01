const { Router } = require("express");
const setAppointment = require("../controllers/appointmentController");
const appointmentRoutes = Router();

appointmentRoutes.post("/", setAppointment);

module.exports = appointmentRoutes;
