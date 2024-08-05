const mongoose = require('mongoose');

const semesterSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        subjects:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Subject"
            }
        ],
    }
);

const Semester = mongoose.model('Semester', semesterSchema);
module.exports = Semester;
