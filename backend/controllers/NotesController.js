const Course = require('../models/Course');
const Branch = require('../models/Branch');
const Semester = require('../models/Semester');
const Subject = require('../models/Subject');
const Note = require('../models/Note');


exports.addNotes = async(req, res) => {
try
{

  const {type, course, branch, sem , subject, content} = req.body;
  if(!type || !course || !branch || !sem || !subject || !content){
    return res.status(401).json({
      success:false,
      message: "All fields required",
  })}

  if (!Array.isArray(content) || content.some(c => !c.link)) {
    return res.status(400).json({
        success: false,
        message: "Content must be an array with objects containing 'link'",
    });
}

  const note = await Note.create({
    type:type,
    course:course,
    branch:branch,
    sem:sem,
    subject:subject,
    content:content
  });

  // update Subject
  // let sub = await Subject.findOne({name:subject});
  // if(sub){
  //   console.log("Subject Found : ", sub);
  //   console.log("Subject id : ", sub._id);
  //   // find by Id and update
  //   sub = await Subject.findByIdAndUpdate(
  //     {_id:sub._id},
  //     {$push:{notes:note}},
  //     {new:true});
  // }
  // else{
  //   sub = await Subject.create({name: subject, notes: note._id});
  // }
  // console.log("Subject created : ", sub);

  // // update Semester
  // let semester = await Semester.findOne({name:sem});
  // if(semester){
  //   console.log("semester Found : ", semester);
  //   console.log("semester id : ", semester._id);
  //   // find by Id and update
  //   let found = semester?.subjects.find(it => it._id.toString() === sub?._id.toString());
  //   if(!found){
  //     semester = await Semester.findByIdAndUpdate(
  //       {_id:semester._id},
  //       {$push:{ subjects:sub?.id}},
  //       {new:true});
  //     }
  // }
  // else{
  //   semester = await Semester.create({name: sem, subjects: sub._id});
  // }
  // console.log("Semester created : ", semester);

  // // branch update
  // let branchObj = await Branch.findOne({name:branch});
  // if(branchObj){
  //   console.log("branchObj Found : ", branchObj);
  //   console.log("branchObj id : ", branchObj._id);
  //   // find by Id and update
  //   let found = branchObj?.semesters.find(it => it._id.toString() === semester?._id.toString());
  //   if(!found){
  //       branchObj = await Branch.findByIdAndUpdate(
  //         { _id:branchObj._id },
  //         { $push:{ semesters : semester?.id} },
  //         {new:true});    
  //   }
  // }
  // else{
  //   branchObj = await Branch.create({name: branch, semesters: semester._id});
  // }
  // console.log("Branch created : ", branchObj);

  // // course category update
  // let courseObj = await Course.findOne({name:course});
  // if(courseObj){
  //   console.log("courseObj Found : ", courseObj);
  //   console.log("courseObj id : ", courseObj._id);
  //   // find by Id and update
  //   let found = courseObj?.branches.find(it => it._id.toString() === branchObj?._id.toString());
  //   if(!found){
  //     courseObj = await Course.findByIdAndUpdate(
  //       { _id : courseObj._id },
  //       { $push:{ branches : branchObj?.id} },
  //       { new:true });
  //   } 
  // }
  // else{
  //   courseObj = await Course.create({name: course, branches: branchObj._id});
  // }
  // console.log("Course created : ", courseObj);

  return res.status(200).json({
    success:true,
    message: "Notes Added",
})
}
catch(err)
{
    return res.status(500).json({
        success:false,
        message: "Internal server error",
    })
}
}

exports.deleteNotes = async(req, res) => {
    try
    {
      const {id} = req?.body;
      console.log("ID: ",id)
      
      await Note.findOneAndDelete(id);

      return res.status(200).json({
        success:true,
        message:"Notes Deleted"
      })

    }catch(err)
    {
      return res.status(500).json({
        success: false,
        message: "Failed to delete notes."
      })
    }
}

exports.getNotes = async(req,res) => {
    
  try{
    let { course, branch, sem, subject } = req?.params;
    console.log(course,branch, sem ,subject);  
    
    course = course.replaceAll("-"," ");
    branch = branch.replaceAll("-"," ");
    sem = sem.replaceAll("-"," ");
    subject = subject.replaceAll("-"," ");

    const notes = await Note.find({
        course:course,
        branch:branch,
        sem:sem,
        subject:subject,
    })

    console.log("NOTES FETCHED :  ", notes)

    return res.status(200).json({
        success:true,
        message:"Notes Fetched",
        data:notes,
    })

}catch(err)
{
    return res.status(500).json({
        success: false,
        message: "failed to fetch notes."
    })
}
}

exports.getNotesByCourse = async(req,res) => {
    
  try{
    let {course} = req?.params;
    console.log(course);  
    course = course.replaceAll("-"," ");

    const details = await Course.find({name:course})
                                    .populate({
                                      path:"branches",
                                      populate: {
                                        path:"semesters",
                                        populate:{
                                          path:"subjects",
                                          populate:"notes"
                                        }
                                      }
                                    }).exec();

    console.log("NOTES FETCHED :  ", details)

    return res.status(200).json({
        success:true,
        message:"Notes Fetched",
        data:details,
    })

}catch(err)
{
    return res.status(500).json({
        success: false,
        message: "failed to fetch all notes."
    })
}
}


