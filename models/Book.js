const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ObjectId = mongoose.Schema.Types.ObjectId


const Book = mongoose.model("books", new Schema({
    title: String,
    description: String,
    author: { type: ObjectId, ref: "authors" },
    //if you need an array
    // author: [ { type: ObjectId, ref: "authors" } ],
    rating: Number
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt"
    }
}))

module.exports = Book