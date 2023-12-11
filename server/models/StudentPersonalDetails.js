const mongoose = require("mongoose")

const StudentPersonalDetailsSchema = new mongoose.Schema({
    name: String,
    dob: Date,
    gender: String,
    age: Number,
    aadhar: Number,
    mobileNo: Number,
    email: String,
    fatherName: String,
})

const StudentPersonalDetailsModel = mongoose.model('student_personal_details', StudentPersonalDetailsSchema);
module.exports = StudentPersonalDetailsModel;