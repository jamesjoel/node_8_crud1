var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(__dirname+"/public"));
app.use(bodyParser());

app.use(require("./config/routes"));

app.listen(process.env.PORT || 3000, function(){
	console.log(process.env.PORT);
	console.log("Running");
});