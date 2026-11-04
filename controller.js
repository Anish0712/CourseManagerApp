const courseModel = require('..//model/model');

exports.addCourse=async(req,resp)=>{
    const course=await courseModel.create(req.body)
    resp.json(course)
}

exports.showCourses=async(req,resp)=>{
    const courses=await courseModel.find()
    resp.json(courses)
}

exports.showCourse=async(req,resp)=>{
    const course=await courseModel.findById(req.params.id)
    resp.json(course)
}

exports.updateCourse=async(req,resp)=>{
    const course=await courseModel.findByIdAndUpdate(req.params.id,req.body)
    resp.json({message:"updated"})
}

exports.deleteCourse=async(req,resp)=>{
    const course=await courseModel.findByIdAndDelete(req.params.id)
    resp.json({message:"deleted"})
}