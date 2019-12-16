const mongoose = require("mongoose")

const Schema = mongoose.Schema

const Author = mongoose.model("authors", new Schema({
    firstName: String,
    lastName: String,
    nationality: String,
    birthday: Date,
    pictureUrl: String
}))

module.exports = Author