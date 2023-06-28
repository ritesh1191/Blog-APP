const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userController");

// router object
const router = express.Router();

// Get all users || GET
router.get("/all-users", getAllUsers);

// Create new user || POST
router.post("/register", registerController);

// Login user|| POST
router.post("/login", loginController);
module.exports = router;
