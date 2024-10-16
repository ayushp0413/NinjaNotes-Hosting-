const { joinusEmail } = require("../mailTemplates/joinusEmail");
const JoinUs = require("../models/JoinUs");
const { mailSender } = require("../utils/mailSender");

exports.createJoinus = async(req, res) => {
    try
    {
        const {name, email, phoneNo, github, message} = req.body;
        if(!name || !email || !phoneNo || !github || !message)
        {
            return res.status(401).json({
                success:false,
                message:"Please fill all details, all fields required",
            })
        }
        
        const result = await JoinUs.create({name:name, email:email, phoneNo:phoneNo, github:github, message:message});
        if(!result){
            return res.status(404).json({
                success:false,
                message:"Join us operation failed",
            })
        }

        // send a mail to user 
        const body = joinusEmail(email);
        const response = await mailSender(email, "Ninja Notes - Join our Team", body);
        
        return res.status(200).json({
            success:true,
            message:"Thanks for Choosing Us",
        })

    }catch(err)
    {
        return res.status(500).json({
            success: false,
            message: "Join us failed."
        })
    }
}

// just for  admin to see entries
exports.getAllJoinUsMessages = async (req, res) => {
    try{

        const allMessages = await JoinUs.find({});
        if(!allMessages){
            return res.status(200).json({
                success:false,
                message:"Messages not fecthed",
            })    
        }

        return res.status(200).json({
            success:true,
            message:"Join us messages fetched successfully",
            data:allMessages,
        })

    }catch(err)
    {
        return res.status(500).json({
            success: false,
            message: "failed to fetch join us messages."
        })
    }
}
