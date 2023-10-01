const Doctor = require("../model/docterModel");

const addDocter = async (req, res) => {
  const { name, specialization, availability, maxPatients } = req.body;

  try {
    const newDocter = await Doctor.create({
      name,
      specialization,
      availability,
      maxPatients,
    });
    if (newDocter) {
      return res.status(201).json(newDocter);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get docter List
const getDocterList = async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// get docter detail
const getDocterDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const doctor = await Doctor.findById(id);
    if (!doctor) {
      res.status(404).json({ error: "Doctor not found" });
    } else {
      res.status(200).json(doctor);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getDocterDetails,
  getDocterList,
  addDocter,
};
