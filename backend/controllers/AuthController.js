const Profile = require("../models/Profile");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config();

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

// login
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