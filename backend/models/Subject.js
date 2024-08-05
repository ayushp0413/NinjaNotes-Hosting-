const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        notes:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Note"
            }
        ],
    }
);

const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;
