var express = require("express");
const productRoute = require("./routes/productRoute");
var bodyParser = require('body-parser');
var morgan = require("morgan");

var app = express();

app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use("/product",productRoute);

app.all("/",(req,res,next)=>{

    res.status(200).send("hello world");
});

module.exports = app;