const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
    },
    email :{
        type: String,
        required: true,
        trim: true,
    },
    password : {
        type : String,
        required: true,
    },
    profile :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Profile",
    },
    blogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Blogs",
            }
        ],
    papers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Papers",
            }
        ], 
    notes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Notes",
            }
        ],       
    image: {
        type: String,
        required: true,
    },
    token: {
        type: String,
    },
    resetPasswordExpiry: {
        type: Date,
    },
},
// // Add timestamps for when the document is created and last modified
{ timestamps: true }
);


module.exports = mongoose.model("Users",userSchema);