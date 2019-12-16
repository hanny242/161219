const express = require("express")
const router = express.Router()
const Book = require("../models/Book")
//populate wasn't working because I had to require the Author model somwhere in my app
//otherwise it couldn't be found
//you don't need it per se in this route, because you won't use it
//but it needs to be "connected" and accesible in your app
//usually you won't have this problem because you will be using it somewhere already

//QUERY
router.get("/book-detail", (req, res) => {
    let bookId = req.query.id
    //populate uses the name of the FIELD you want to populate
    //Tip: during project week, during development you might create some relations and then deleted some documents, so you will have a relation with an id that doesn't exist anymore
    //if populate doesn't find a match, it crashes
    Book.findById(bookId)
    .populate("author")
    .then((book) => {
        res.render("bookDetail.hbs", {book: book})
    })
    .catch(err => console.log(err))
})


module.exports = router