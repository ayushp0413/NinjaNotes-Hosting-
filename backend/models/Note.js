const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
    {
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
        unit:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        }
    }
);

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;