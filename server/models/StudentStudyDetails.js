const mongoose = require("mongoose")

const StudentStudyDetailsSchema = mongoose.Schema({
    sscBoard: String,
    sscType: String,
    sscPassYear: String,
    sscHallTicket: String,
    dob: Date,
})

const StudentStudyDetailsModel = mongoose.model('student_study_details', StudentStudyDetailsSchema);
module.exports = StudentStudyDetailsModel;