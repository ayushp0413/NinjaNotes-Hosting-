const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
    {
        type:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        excerpt:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        tags:[{
            type: String,
        }],
        author:{
            type:String,
            required:true,
        }
},
{ timestamps: true }
)

module.exports = mongoose.model("Blogs",BlogSchema);