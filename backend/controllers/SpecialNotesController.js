const SpecialNotes = require("../models/SpecialNotes");
exports.addSpecialNotes = async(req, res) => {

    try
    {
    
      const {subject, description, content, company , course} = req.body;
      if(!subject || !description || !content){
        return res.status(401).json({
          success:false,
          message: "All fields required",
      })
      } 
   
      const note = await SpecialNotes.create({
          subject:subject,
          content:content,
          description:description,
          course:course,
          company:company,

      });
      return res.status(200).json({
        success:true,
        message:"Special Notes Created"
      })
    
    }
    catch(err)
    {
        return res.status(500).json({
            success:false,
            message: "Internal server error in creating special notes",
        })
    }
}
    
exports.getSpecialNotes = async(req,res) => {
        
      try{  
    
        const notes = await SpecialNotes.find({});
        console.log("Special notes fecthed :  ", notes)
    
        return res.status(200).json({
            success:true,
            message:"Special Notes Fetched",
            data:notes,
        })
    
    }catch(err)
    {
        return res.status(500).json({
            success: false,
            message: "failed to fetch special notes notes."
        })
    }
}