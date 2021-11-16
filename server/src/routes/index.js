const express = require("express");
const router = express.Router();

// controllers 
// import user controller
const { getUser, getUsers, updateUser ,deleteUser } = require("../controllers/user")
// import country controller
const { addCountry, getCountry, getCountries, deleteCountry, updateCountry } = require("../controllers/country")
// import trip controller
const { addTrip, getTrip, getTrips, deleteTrip, updateTrip } = require("../controllers/trip")
// import auth controller 
const { login, register } = require("../controllers/auth")
// middlewares
const { auth } = require("../middlewares/auth");

// Routes
// user route
router.get("/user/:id", getUser);
router.get("/users", getUsers);
router.patch("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
// country route
router.post("/country", addCountry);
router.get("/country/:id", getCountry);
router.get("/countries", getCountries);
router.delete("/country/:id", deleteCountry);
router.patch("/country/:id", updateCountry);
// Trip route
router.post("/trip", addTrip);
router.get("/trip/:id", getTrip);
router.get("/trips", getTrips);
router.delete("/trip/:id", deleteTrip);
router.patch("/trip/:id", updateTrip);
// auth route 
router.post("/login", login);
router.post("/register", register);

module.exports = router;