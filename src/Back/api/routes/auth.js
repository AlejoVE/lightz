const express = require("express");
const router = express.Router();

const {
  register,
  login,
  forgotPassword,
  resetPassword,
} = require("../controllers/AuthController");

const { addReport } = require("../controllers/ReportController");

router.post("/register", register);
router.post("/login", login);
router.post("/:username", addReport);
router.put("/forgot-password", forgotPassword);
router.put("/reset-password/:token", resetPassword);

module.exports = router;
