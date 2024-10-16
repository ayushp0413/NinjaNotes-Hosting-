const mongoose = require('mongoose');
const RatingAndReviews = require('./Testimonials');

const noteSchema = new mongoose.Schema(
    {
        type:
        {
            type:String,
            required:true,
        },
        course:{
            type:String,
            required:true,
        },
        branch:{
            type:String,
            required:true,
        },
        sem:{
            type:String,
            required:true,
        },
        subject:{
            type:String,
            required:true,
        },
        content: [{
        unit:{
            type: Number,
            required: true,
        },  
        link: {
            type: String,
            required: true,
        },
        }],
    }
);

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;