const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    CourseName:{
        type:String,
        required:true
    },
    CourseCode:{
        type:String,
        required:true
    },
    DeptName:{
        type:Schema.Types.ObjectId,
        ref:'Department',
    },
});

const Course = mongoose.model("Course","CourseSchema");

module.exports = Course;