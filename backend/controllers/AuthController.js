const Profile = require("../models/Profile");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config();
const { mailSender } = require("../utils/mailSender")
const { forgotPasswordLink } = require("../mailTemplates/forgotPasswordLink")

exports.signUp = async(req,res)=> {

    try{
        // fetch details
        const { name, email, password, confirmPassword } = req.body;
        if(!name || !email || !password || !confirmPassword ) {
            return res.status(400).json({
                success: false,
                message: "Please fill all details",
            })
        }

        // passwaord matching
        if(password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password not matched, Please enter correct password",
            })
        }

        // exsisting user
        const exsistingUser = await User.findOne({email});
        if(exsistingUser) {
            return res.status(400).json({
                success: false,
                message: "Email already exist",
            });
        }

        // hash password and store
        let hashPassword = await bcrypt.hash(password, 10);
        // object bana lo , tabhi to object ID store kr paynge
        const profileDetails = await Profile.create({
            gender : null,
            about : null,
            dateOfBirth: null,
            contactNumber: null,
            college:null,
        });

        let vname = name.split(" ");
        const fname = vname[0];
        const lname = vname[1];

        //entry created
        const user = await User.create({name, email, password:hashPassword,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${fname}%20${lname}`,
            profile: profileDetails._id,
        });

        return res.status(200).json({
            success: true,
            message: "User registered successfully ",
            user,
        })

    }catch(err)
    {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Unable to signUp ",
        })
    }
}

exports.login = async (req,res)=> {
    try
    {
        // fetch details
        const { email , password} = req.body ;
        console.log(email, password);

        if(!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please fill all required fields",
            });
        }

        // email checking
        const exsistingUser = await User.findOne({email}).populate("profile").exec();
        if(!exsistingUser) {
            return res.status(400).json({
                success: false,
                message: "User not registered with this email, Please enter valid email",
            });
        }

        const dbPassword = exsistingUser?.password; 
        const result = await bcrypt.compare(password, dbPassword);
        if(!result) {
            return res.status(400).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        // all good
        // generate jwt token and send cookie

        const payload = {
            id: exsistingUser._id,
            email: exsistingUser.email,
        }

        const token = jwt.sign(payload,process.env.JWT_SECRET, {expiresIn:'10h'});
        exsistingUser.token = token;
        exsistingUser.password = undefined;

        res.cookie("jwt", token, {httpsOnly: true, expiresIn: '48h'}).status(200).json({
            success: true,
            message: "User LoggedIn successfully",
            exsistingUser,
            token,
        });

    }catch(err)
    {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error in LogIn ",
        })
    }
}

exports.forgotPassword = async (req,res)=> {
    try
    {
        const { email } = req.body ;
        if(!email) {
            return res.status(400).json({
                success: false,
                message: "Please Send Email!",
            });
        }

        // email checking
        const exsistingUser = await User.findOne({email});
        if(!exsistingUser) {
            return res.status(400).json({
                success: false,
                message: "User not registered with this email, Please enter valid email",
            });
        }

        // every user get unique link , for that we send random unique token with link --> token will be store in user Schema (for further verrification)
        const token = crypto.randomUUID();
        const updatedUser = await User.findOneAndUpdate({email: email},
            {
                token: token,
                resetPasswordExpiry: Date.now() + 10*60*1000,
            },
            {new : true});   // new : true return the updtaed doc
        
        // sending mail to user
        const url = `http://localhost:5173/update-password/${token}`;
        const body = forgotPasswordLink(exsistingUser?.name, url);
        const mailResponse = mailSender(email,"Reset Password Confirmation",body);
        if(!mailResponse) {
            res.status(500).json({
                success:false,
                message:"Unable to send mail to you",
            })
        }

        return res.status(200).json({
            success: true,
            message: "Reset password email sent successfully to your mail, Please check your email",  
            token : token ,
            url:url,
        });
        
       
    }catch(err)
    {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal server error in Forgot Password ",
        })
    }
}

exports.resetPassword = async (req,res) => {
    try
    {
        const {password, confirmPassword, token} = req.body; // ye token yaha kese aaya---> frontend dalega

        // validate
        if(password!==confirmPassword) {
            return res.status(401).json({
                success: false,
                message:"Password not matched, Please enter correct password",
            });
        }

        const user = await User.findOne({token: token}); // jo abhi upr daala hai
        if(!user) {
            return res.status(401).json({
                success: false,
                message:"Token is invalid",
            });
        }

        // expiry check
        if(user.resetPasswordExpiry < Date.now()) {
            return res.status(401).json({
                success: false,
                message:"Token expires, Please resend email",
            });
        }

        let hashPassword = await bcrypt.hash(password,10);
        user.password=hashPassword;
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password reset successfully",
        })
        
    }catch(err)
    {
        return res.status(500).json({
            success: false,
            message:"Internal server error in reset password.",
        })
    }
}
