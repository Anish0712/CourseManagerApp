const mongoose = require('mongoose');

const courseSchema=mongoose.Schema(
    {
        id:Number,
        courseName:String,
        instructor:String,
        category:String,
        duration:Number,
        level:String,
        imageUrl:String
    },{timestamps:true}
)

const courseModel=mongoose.model("course",courseSchema)

module.exports=courseModel