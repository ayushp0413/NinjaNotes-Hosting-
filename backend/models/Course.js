const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        branches:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Branch"
            }
        ],
    }
);

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
