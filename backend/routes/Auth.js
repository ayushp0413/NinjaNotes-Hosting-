const express = require("express");
const router = express.Router();

const { login, signUp, forgotPassword, resetPassword } = require("../controllers/AuthController");

router.post("/login", login);
router.post("/signup", signUp);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword", resetPassword);

module.exports = router;