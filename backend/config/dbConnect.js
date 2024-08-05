const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    try{
        mongoose.connect(process.env.DATABASE_URL, {
        //    useNewUrlParser:true,
        //    useUnifiedTopology:true,
        })
        .then(console.log("Database connection established successfully!"))
        .catch((err)=>{
            console.error(err);
            console.log("Database connection failed!");
            process.exit(1);
        })

    }catch(err)
    {
        console.log("Database connection failed!")
    }
}

module.exports = dbConnect;