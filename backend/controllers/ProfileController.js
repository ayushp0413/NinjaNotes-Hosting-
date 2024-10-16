const { passwordUpdate } = require("../mailTemplates/passwordUpdate");
const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadToCloudinary } = require("../utils/uploadToCloudinary");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { mailSender } = require("../utils/mailSender");

require("dotenv").config();


exports.updateProfile = async (req, res) => {
    try{
        const {dob, about, gender, phoneNo, college} = req?.body;
        console.log("Printing data : ",about, dob, gender, phoneNo, college);

        const userId = req?.user?.id; 
        if(!userId) {
            return res.status(401).json({
                success: false,
                message: "User invalid, Please try again"
            })
        };

        // find user --> usme profileID mil jaygi or update kr do
        let userDetails = await User.findById({_id: userId});
        const profileID = userDetails?.profile; // udr ID he store hai
        
        //find object of profile with it update and then save in DB or directly findByIDandUPdate
        const profileObject = await Profile.findByIdAndUpdate(
            {_id: profileID},
            {
                gender: gender,
                dateOfBirth: dob,
                about: about,
                contactNumber: phoneNo,
                college:college,
            },
            {new: true}        
        );

        userDetails = await User.findById({_id: userId}).populate("profile").exec();

        return res.status(200).json({
            success: true,
            message:"Profile Updated successfully",
            data:userDetails,
        })

    }catch(err)
    {
        return res.status(500).json({
            success: false,
            message: "Unable to update profile. Please try again."
        })
    }
}

exports.getUserDetails = async (req, res)=> {
    try{

        const userId = req?.user?.id;
        if(!userId) {
            return res.status(401).json({
                success: false,
                message: "Invalid User!"
            })
        };

        const userDetails = await User.findById(userId).populate("profile").exec();

        return res.status(200).json({
            success: true,
            message: "User info fectched sucessfully",
            data:userDetails,
        })

    }catch(err)
    {
        return res.status(500).json({
            success: false,
            message: "Unable to fetch profile. Please try again."
        })
    }
}

// update profile Picture
exports.updateProfilePicture = async (req, res) => {
    try{
  
        const profilePicture = req.files?.displayPicture;

        if(!profilePicture) {
            return res.status(401).json({
                success: false,
                message: "Please provide profile picture"
            }) 
        };

        const userId = req.user.id; 
        if(!userId) {
            return res.status(401).json({
                success: false,
                message: "User invalid, Please try again"
            })
        };

        // upload to cloudinary
        const profilePictureUrl = await uploadToCloudinary(profilePicture, process.env.FOLDER);
    
        const userDetails = await User.findByIdAndUpdate({_id: userId}, 
            {image: profilePictureUrl.secure_url} ,
            {new : true})
            .populate("profile").exec();

        return res.status(200).json({
            success: true,
            message:"Profile Picture Updated successfully",
            data:userDetails,
        })

    }catch(err)
    {
        return res.status(500).json({
            success: false,
            message: "Unable to update profile picture . Please try again."
        })
    }
}


// change password
exports.changePassword = async(req, res) => {
    try{
    
        const { email, oldPassword, newPassword } = req.body;

        const exsistingUser = await User.findOne({email});
        if(!exsistingUser) {
            return res.status(400).json({
                success: false,
                message: "Invalid email, Password cannot changed",
            });
        }

        // comapre older password is right or wrong

        const result = await bcrypt.compare(oldPassword, exsistingUser.password);
        if(!result) {
            return res.status(400).json({
                success: false,
                message: "Your older password is incorrect.",
            });
        }
        

        //hash new password and  update password in DB
        let hashPassword = await bcrypt.hash(newPassword, 10);
        exsistingUser.password = hashPassword ;
        
        const updatedUser = await exsistingUser.save();  // existing user is an Object , usko save kr diya

        // send email that password changed
        const body = passwordUpdate(exsistingUser);
        const response = await mailSender(email, "Ninja Notes - Password Changed", body);

        return res.status(200).json({
            success: true,
            message: "Password Changed successfully",
            updatedUser,
        })

    }catch(err)
    {
        return res.status(500).json({
            success:false,
            message:"Internal server error in change password"
        })
    }
}


// delete account
exports.deleteProfile = async (req, res) => {
    try{
        const userId = req.user.id;
        const userDetails = await User.findById(userId);
        if(!userId) {
            return res.status(401).json({
                success: false,
                message: "User not found , cannot delete account"
            })
        };
        
        // profile delete krdo : fetch profile id and then delete
        const profileId = userDetails.profile;
        await Profile.findByIdAndDelete({_id: profileId});

        // user delete kr do 
        await User.findByIdAndDelete({_id: userId});

        return res.status(200).json({
            success:true,
            message:"Your Account deleted"
        })

    }catch(err)
    {
        return re.status(500).json({
            success: false,
            message: "Unable to delete profile. Please try again."
        })
    }
}
