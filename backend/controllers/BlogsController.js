const Blogs = require("../models/Blogs");

exports.createBlog = async(req, res) => {
    try{

        // fetch data
        const {type, title, excerpt, content, category, author, tags} = req.body;
        if(!title || !type || !excerpt || !content || !category || !author){
            return res.status(401).json({
                success:false,
                message:"All Fields Required",
            });
        }

        console.log("Tags : ", tags);

        const blog = await Blogs.create({
            type:type,
            title:title,
            excerpt:excerpt,
            content:content,
            category:category,
            tags:tags,
            author:author,
        });

        return res.status(200).json({
            success:true,
            message:"Blog Created Successfully",
            data:blog,
        })

    }catch(err)
    {
        console.log("Error in creating blogs");
        return res.status(500).json({
            success:false,
            message:"Unable to Publish Blog"
        })
    }
}

exports.getAllBlogs = async(req, res) => {
    try{
       
        const query = req?.query?.query;
        console.log("object query: ", query);

        let blogs = [];    
        if(query)
        {
            blogs = await Blogs.find({
                type:"Blogs",
                $or: [
                    {title:{ $regex: query, $options: "i" } },
                    {category: { $regex: query, $options: "i" } },
                    {tags: { $regex: query, $options: "i" } },
                ],
            });
        }
        else
        {
            blogs = await Blogs.find({});
        }
        
        return res.status(200).json({
            success:true,
            message:"Blogs Fetched",
            data:blogs,
        })
        
    }catch(err)
    {
        console.log("Error in fetching blogs");
        return res.status(500).json({
            success:false,
            message:"Unable to get Blog"
        })
    }
}
