const mongoose = require("mongoose")

const PhotoSchema = mongoose.Schema({
    image: String,
})

const PhotoModel = mongoose.model('photo', PhotoSchema);
module.exports = PhotoModel;

