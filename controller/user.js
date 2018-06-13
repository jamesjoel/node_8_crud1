var express = require('express');
var router = express.Router();
var user = require("../model/user");
var mongo = require('mongodb');

router.get("/", function(req, res){
	//res.send("<h1>This is user panel</h1>");
	var id = req.session.uid;
	user.find({ _id : mongo.ObjectId(id)}, function(err, result){
		console.log(result);
		var pagedata = { title : "User", pagename : "user/index", data : result[0]};
		res.render("layout", pagedata);
	});
	
});


router.get("/update", function(req, res){
	var id = req.session.uid;
	user.find({ _id : mongo.ObjectId(id)}, function(err, result){
		console.log(result);
		var pagedata = { title : "User", pagename : "user/update", data : result[0]};
		res.render("layout", pagedata);
	});
});

module.exports=router;