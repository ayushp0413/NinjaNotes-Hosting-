const mongoose = require('mongoose');
const RatingAndReviews = require('./Testimonials');

const specialNotesSchema = new mongoose.Schema(
    {
        subject:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
        course:{
            type:String,
        },
        company: {
            type:String
        }
    }
);

const SpecialNotes = mongoose.model('Special', specialNotesSchema);
module.exports = SpecialNotes;