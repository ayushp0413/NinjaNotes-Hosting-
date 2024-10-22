const Note = require("../models/Note");
const Testimonials = require("../models/Testimonials");

// create reating
exports.createRatingAndReviews = async (req, res) => {

    try{

        console.log("Testimonial create : ", req);
        const {name, rating, review } = req.body;

        if(!name || !rating || !review) {
            return res.status(400).json({
                success: false,
                message:"Please give Rating Stars",
            })
        };
        
        const vname = name.split(" ");
        let firstname = vname[0];
        let lastname;
        if(vname.length > 1 ){
            lastname = vname[1];
        } 
    

        // create RaR 
        const ratingAndReview = await Testimonials.create(
            {
                name: name,
                rating:rating,
                review: review,
                image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstname}%20${lastname}`,
            }
        );

        return res.status(200).json({
            success: true,
            message: "Rating and Reviews created successfully",
        })

    }catch(err)
    {
        return res.status(500).json({
            success: false,
            message:"Unable to create Rating and reviews....",
            err,
        })
    }
}

// getAllRating total : used to show case on home footer page
exports.getAllRatingAndReviews = async (req, res) => {

    try{

        const allReviews =  await Testimonials.find({})
                            .sort({rating: "desc"});

        
        return res.status(200).json({
            success: true,
            message: "Rating and Reviews fetched successfully",
            data:allReviews,
        })

    }catch(err)
    {
        return res.status(500).json({
            success: false,
            message:"Unable to fetch Rating and reviews",
            err,
        })
    }
}
