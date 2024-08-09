const express = require("express");
const { addNotes, getNotes, getNotesByCourse } = require("../controllers/NotesController");

const router = express.Router();

router.post("/addNotes", addNotes);
router.get("/getNotes/:course/:branch/:sem/:subject/:unit", getNotes);
router.get("/getNotes/:course", getNotesByCourse);



module.exports = router;