const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    DeptName:{
        type:String,
        required:true
    },
    DeptCode:{
        type:String,
        required:true
    },
});

const Department = mongoose.model("Department","DepartmentSchema");

module.exports = Department;