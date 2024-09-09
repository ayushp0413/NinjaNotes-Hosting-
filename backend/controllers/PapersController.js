const Papers = require("../models/Papers");


exports.addPapers = async (req, res) => {
  try {
      const { type, course, examType, branch, sem, subject,  content } = req.body;

      // Check for all required fields
      if (!type || !course || !branch || !sem || !subject || !examType || !content) {
          return res.status(400).json({
              success: false,
              message: "All fields are required",
          });
      }

      // Validate content structure
      if (!Array.isArray(content) || content.some(c => !c.link || !c.year)) {
          return res.status(400).json({
              success: false,
              message: "Content must be an array with objects containing 'link' and 'year'",
          });
      }

      // Create the paper document
      const paper = await Papers.create({
          type,
          course,
          branch,
          sem,
          subject,
          examType,
          content
      });

      console.log("Paper Created: ", paper);

      return res.status(200).json({
          success: true,
          message: "Paper added successfully",
          data: paper
      });

  } catch (err) {
      console.error("Error creating paper:", err);  // Log the error for debugging
      return res.status(500).json({
          success: false,
          message: "Internal server error",
      });
  }
};


exports.getPapers = async (req, res) => {
  try 
  {
      let {course, examType, branch, sem, subject } = req?.params;
      console.log(examType, course, branch, sem, subject);

      // validate
      examType = examType.replaceAll("-", " ");
      course = course.replaceAll("-", " "); // not neccessary
      branch = branch.replaceAll("-", " "); // not neccessary
      sem = sem.replaceAll("-", " ");
      subject = subject.replaceAll("-", " ");

      // Find papers with matching criteria
      const papers = await Papers.find({
          examType:examType,
          course:course,
          branch:branch,
          sem:sem,
          subject:subject,
      });

      console.log("Papers FETCHED:", papers);

      return res.status(200).json({
          success: true,
          message: "Papers Fetched",
          data: papers,
      });

  } catch (err) {
      console.error("Error fetching papers:", err);  // Log the error for debugging
      return res.status(500).json({
          success: false,
          message: "Failed to fetch papers.",
      });
  }
};



