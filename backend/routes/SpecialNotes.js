const express = require("express");
const { addSpecialNotes, getSpecialNotes } = require("../controllers/SpecialNotesController");
const router = express.Router();

router.post("/addSpecialNotes" , addSpecialNotes);
router.get("/getSpecialNotes" , getSpecialNotes);

module.exports = router;