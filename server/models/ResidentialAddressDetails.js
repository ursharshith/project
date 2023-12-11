const mongoose = require("mongoose")

const ResidentialAddressDetailsSchema = new mongoose.Schema({
    district: String,
    mandal: String,
    village: String,
    address: String,
    postalCode: Number,
})

const ResidentialAddressDetailsModel = mongoose.model('residential_details', ResidentialAddressDetailsSchema);
module.exports = ResidentialAddressDetailsModel;