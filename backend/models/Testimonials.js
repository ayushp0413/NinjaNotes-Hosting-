const mongoose = require("mongoose");

const testimonialsSchema = new mongoose.Schema({

   name:{
    type: String,
    required:true,
   },
   rating:{
    type: Number,
    required: true,
   },
   review: {
    type: String,
    required: true,
   },
   image: {
    type: String,
   }

});


module.exports = mongoose.model("Testimonials",testimonialsSchema);