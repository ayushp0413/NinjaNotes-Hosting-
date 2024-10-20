const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        semesters:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Semester"
            }
        ],
    }
);

const Branch = mongoose.model('Branch', branchSchema);
module.exports = Branch;
