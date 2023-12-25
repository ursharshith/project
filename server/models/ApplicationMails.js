const mongoose = require("mongoose")

const ApplicationMails = mongoose.Schema({
    email: String,
})

const ApplicationMailsModel = mongoose.model('application-mails', ApplicationMails)
module.exports = ApplicationMailsModel;