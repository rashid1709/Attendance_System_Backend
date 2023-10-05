const mongoose = require('mongoose');

const TeacherSchema = new mongoose.Schema({
    TeacherName:{
        type:String,
        required:true
    },
    TeacherMobile:{
        type:Number,
        required:true
    },
    TeacherEmail:{
        type:String,
        required:true,
        unique:true
    }
});

const Teacher = mongoose.model("Teacher","TeacherSchema");

module.exports = Teacher;