const express = require("express");
const { createJoinus, getAllJoinUsMessages } = require("../controllers/joinUsContoller");
const router = express.Router();

router.post("/joinUs", createJoinus);
router.get("/getAllJoinUs", getAllJoinUsMessages);

module.exports = router;