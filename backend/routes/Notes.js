const express = require("express");
const { addNotes, getNotes } = require("../controllers/NotesController");

const router = express.Router();

router.post("/addNotes", addNotes);
router.get("/getNotes/:course/:branch/:sem/:subject/:unit", getNotes);



module.exports = router;