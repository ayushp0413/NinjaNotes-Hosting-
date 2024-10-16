const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = async(req,res,next)=>{
    try
    {
        console.log("Request at auth cookies : ", req?.cookies);
        console.log("Request at auth body : ", req?.body);
        // console.log("Request at auth header : ", req?.header("Authorization").replace("Bearer ",""));
        // fecth token from req and authorize it
        const token = req?.cookies?.jwt 
                      || req?.body?.token 
                      || req?.header("Authorization").replace("Bearer ","");

          
        if(!token)
        {
            return res.status(401).json({
                success:false,
                message:"Token Missing, Please re-login",
            });
        }
       
        // verify this token 
        try {
            console.log("Token being verified:", token);
            const payload = jwt?.verify(token, process.env.JWT_SECRET);
            console.log("Token verified successfully:", payload);
            req.user = payload;
        } catch (err) {
            console.error("Error during token verification:", err.message);
            return res.status(401).json({
                success: false,
                message: "Token is invalid or expired, please login again.",
            });
        }

        
        next();
     
    }catch(err)
    {
        return res.status(500).json({
            success:false,
            message:"Token Invalid, Please login again!"
        })   
    }
}