const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema(
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
        examType:{
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
        link: {
            type: String,
            required: true,
        },
        year: {
            type: String,
            required: true,
        }
        }],
    }
);

const Papers = mongoose.model('Papers', paperSchema);
module.exports = Papers;