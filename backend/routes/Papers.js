const express = require("express");
const { addPapers, getPapers} = require("../controllers/PapersController");

const router = express.Router();

router.post("/addPapers", addPapers);
router.get("/getPapers/:course/:examType/:branch/:sem/:subject", getPapers);

module.exports = router;