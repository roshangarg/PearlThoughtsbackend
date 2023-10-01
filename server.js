const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const docterRoutes = require("./routes/docterRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

// Init the app

const app = express();

// Middleware

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
// Routes

app.use("/api/doctors", docterRoutes);
app.use("/api/appointments", appointmentRoutes);

const port = process.env.PORT || 4000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("App id connected to db and listening on port number ", port);
    });
  })
  .catch((error) => console.log(error.message));
