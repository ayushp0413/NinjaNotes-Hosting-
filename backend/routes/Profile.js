const express = require("express");
const { updateProfile, updateProfilePicture, deleteProfile, getUserDetails, changePassword } = require("../controllers/ProfileController");
const {auth} = require("../middlewares/auth")
const router = express.Router();

router.put("/updateProfile", auth, updateProfile);
router.put("/updateProfilePicture", auth, updateProfilePicture);
router.put("/updatePassword", auth, changePassword);
router.delete("/deleteProfile", auth, deleteProfile);
router.post("/getUserDetails", auth, getUserDetails);

module.exports = router;