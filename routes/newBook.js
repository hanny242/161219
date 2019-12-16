const express = require("express")
const router = express.Router()
const Author = require("../models/Author")
const Book = require("../models/Book")
const mongoose = require("mongoose")


router.get("/new-book", (req, res) => {
    Author.find({})
    .then((authors) => {
        res.render("newBook.hbs", {authors})
    })
    .catch(err => console.log(err))
})

router.post("/new-book", (req, res) => {
    let newBook = {
        title: req.body.title,
        description: req.body.description,
        //we parse the id (string) to an ObjectId
        author: mongoose.Types.ObjectId(req.body.author),
        rating: req.body.rating
    }
    Book.create(newBook)
    .then(() => {
        res.redirect('/')
    })
    .catch(err => console.log(err))
})

module.exports = router