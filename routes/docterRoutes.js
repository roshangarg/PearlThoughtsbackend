const {
  getDocterList,
  getDocterDetails,
  addDocter,
} = require("../controllers/docterController");
const express = require("express");

const docterRoutes = express.Router();

docterRoutes.post("/", addDocter);

docterRoutes.get("/", getDocterList);

docterRoutes.get("/:id", getDocterDetails);

module.exports = docterRoutes;
