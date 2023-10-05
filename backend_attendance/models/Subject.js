const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
    SubjectName:{
        type:String,
        required:true
    },

   SubjectCode:{
     type:String,
     required:true,
},
    CourseName:[
        {
        type:Schema.Types.ObjectId,
        ref:'Course',
    }
 ],
   
    TeacherName:{
        type:Schema.Types.ObjectId,
        ref:'Teacher',
    },
});

const Subject = mongoose.model("Subject","SubjectSchema");

module.exports = Subject;