const express = require("express")
const router = express.Router()
const Book = require("../models/Book.js")

router.get("/", (req, res) => {
    Book.find({})
    .then((books) => {
        res.render("index.hbs", {books})
    })
    .catch((err) => console.log(err))
})

// router.get("/authors", (req, res) => {
//     Author.find({})
//     .then((authors) => {
//         res.render("authors.hbs", {authors})
//     })
//     .catch((err) => console.log(err))
// })


module.exports = router