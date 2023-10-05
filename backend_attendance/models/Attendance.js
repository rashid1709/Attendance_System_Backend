const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    SubjectName:[{
        type:Schema.Types.ObjectId,
        ref:'Subject'
    }],
  
    StudentId:[{
        type:Schema.Types.ObjectId,
        ref:'Subject'
    }],
    Semester:{
        type:Schema.Types.ObjectId,
        ref:'Subject'
    },
    CourseName:{
        type:Schema.Types.ObjectId,
        ref:'Course'
    }
})