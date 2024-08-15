const express = require("express");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dbConnect = require("./config/dbConnect");
const {cloudinaryConnect} =  require("./config/cloudinary")

// middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp",
}))

// routing
const joinUs = require("./routes/JoinUs");
const notes = require("./routes/Notes");
const specialNotes = require("./routes/SpecialNotes");
const testimonials = require("./routes/Testimonial");
const auth = require("./routes/Auth")

// use routing
app.use("/api/v1/auth", auth);
app.use("/api/v1/join", joinUs);
app.use("/api/v1/notes", notes);
app.use("/api/v1/specialNotes", specialNotes);
app.use("/api/v1/testimonials", testimonials);



//  server listening
const PORT = process.env.PORT || 4000
app.listen(PORT , () => {
    console.log(`Server is ready at port number ${PORT}`);
})

// connections
dbConnect();
cloudinaryConnect();



// default route
app.get("/",(req, res) => {
    res.send(`<h1>Ninja Notes Server is up and running.</h1>`)
})