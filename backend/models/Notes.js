const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema(
{   
    course: {
        type: String,
        required: true,
    },
    branch:{
        type:String,
        trim: true,
        required:true,
    },
    sem: {
        type: String,
        trim: true,
    },
    subject:{
        type:String,
        trim:true,
        required:true,
    },
    unit:{
        type:String,
    },
    link: {
        type:String,
        required:true,
    }
},
{ timestamps: true },
)

module.exports = mongoose.model("Notes", noteSchema);