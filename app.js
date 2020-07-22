const express = require('express');
const bodyParser= require('body-parser')
const app = express();

const port = process.env.PORT || 3000;

var path = require('path');


app.use(express.static(path.join(__dirname, "assests")));
app.use(express.static(path.join(__dirname, "images")));
app.use(express.static(path.join(__dirname, "./")));
app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', 'ejs');
app.set("view engine", "ejs");
app.listen(port, function() {
    console.log('listening on :' +port)
  });
