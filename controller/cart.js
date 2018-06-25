var express = require('express');
var router = express.Router();
 

router.get("/addtocart/:id", function(req, res){
	var id = req.params.id;
	if(req.cookies.pid)
	{
		var oldid = req.cookies.pid;
		var newid = oldid+"#"+id;
		res.cookie("pid", newid, { expires : new Date(Date.now() + 3600), httpOnly : true});

	}
	else
	{
		res.cookie("pid", id, { expires : new Date(Date.now() + 3600), httpOnly : true});
	}
	
	res.redirect("/");
});


module.exports=router;