const express = require('express');
const hbs = require('hbs');
const mongoose = require("mongoose");
const bodyParser = require('body-parser');


const app = express()


let options = { 
    useNewUrlParser: true,  
    useUnifiedTopology: true 
};

mongoose.connect("mongodb://localhost:27017/library", options ,(err, connectionInfo)=> {
    if(err) console.log("ERROR", err);
    else console.log("connected to db");
})

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + 'public'));


//routing
app.use("/", require("./routes/index"))
app.use("/", require("./routes/bookDetail"))
app.use("/", require("./routes/newBook"))


app.listen(3000, () => {
    console.log("Listening!")
})