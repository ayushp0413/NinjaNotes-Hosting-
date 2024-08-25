const express = require("express");
const { createBlog, getAllBlogs } = require("../controllers/BlogsController");
const router = express.Router();

router.post("/createBlog" , createBlog);
router.get("/getAllBlogs", getAllBlogs);

module.exports = router;