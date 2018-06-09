var express = require('express');
var router = express.Router();
var student = require("../model/student");


router.get("/", function(req, res){
	student.find(function(err, result){
		console.log(result);
	});

	// var pagedata = { title : "Student", pagename : "student/index" };
	// res.render("layout", pagedata);
});
router.post("/", function(req, res){
	student.insert(req.body, function(err, result){

	});
});



module.exports=router;

/*
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url, function(err, client){
	var db = client.db("tss_8");
	db.collection('student').find().toArray(function(err, result){

	});
});
*/