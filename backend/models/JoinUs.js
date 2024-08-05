const mongoose = require("mongoose")
const { joinusEmail } = require("../mailTemplates/joinusEmail");
const { mailSender } = require("../utils/mailSender");

const joinUsSchema = new mongoose.Schema(
{   
    name: {
        type: String,
        required: true,
    },
    email:{
        type:String,
        trim: true,
        required:true,
    },
    phoneNo: {
        type: Number,
        trim: true,
    },
    github:{
        type:String,
        trim:true,
        required:true,
    },
    message: {
        type: String,
        trim: true,
        required: true,
    }
},
{ timestamps: true },
)

// post middleware for sending mail to user 
async function sendJoinUsEmail(email,name){
    try
    {
        console.log("name", name);
        const mailResponse = await mailSender(email, 
            "Thanks for Choosing us - Ninja Notes", 
            joinusEmail(name),
        );
    }catch(err)
    {
        console.log("Error at sending email ", err);
        throw err;
    }
}

// doc  aayga , abhi document to create he  hua hai
joinUsSchema.post("save", async function(doc,next) {
    if(doc) {
        await sendJoinUsEmail(doc?.email, doc?.name);
    }
    next();
})







module.exports = mongoose.model("JoinUs", joinUsSchema);