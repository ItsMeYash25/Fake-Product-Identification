const express = require("express");
const router = express.Router()

// Controller Function
const {login, signup} = require("../controller/userController");


// Login Route
router.post("/login",login)
// Signup Route
router.post("/signup", signup)

module.exports = router