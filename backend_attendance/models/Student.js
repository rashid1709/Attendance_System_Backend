const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
        StudentName:{
            type:String,
            required:true,
        },
        CourseName:{
            type:Schema.Types.ObjectId,
            ref:'Course',
        },
        Semester:{
            type:String,
            required:'true'

        }

});

const Student = mongoose.model("Student","StudentSchema");

module.exports = Subject;