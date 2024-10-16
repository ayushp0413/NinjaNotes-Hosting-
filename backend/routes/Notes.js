const express = require("express");
const { addNotes, getNotes, getNotesByCourse, deleteNotes } = require("../controllers/NotesController");

const router = express.Router();

router.post("/addNotes", addNotes);
router.delete("/deleteNotes",deleteNotes);
router.get("/getNotes/:course/:branch/:sem/:subject", getNotes);
router.get("/getNotes/:course", getNotesByCourse);


module.exports = router;