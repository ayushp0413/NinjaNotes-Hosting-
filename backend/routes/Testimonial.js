const express = require("express");
const { createRatingAndReviews, getAllRatingAndReviews } = require("../controllers/TestimonialsController");
const router = express.Router();

router.post("/createRatingAndReviews", createRatingAndReviews);
router.get("/getAllRatings", getAllRatingAndReviews);

module.exports = router;
