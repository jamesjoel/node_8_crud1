var express = require('express');
var router = express.Router();

router.use("/", require("../controller/home"));
router.use("/show", require("../controller/show"));
router.use("/student", require("../controller/student"));
router.use("/login", require("../controller/login"));
router.use("/user", userBackdoor, require("../controller/user"));
router.get("/logout", function(req, res){
	req.session.destroy();
	res.redirect("/");
});


function userBackdoor(req, res, next)
{
	// console.log(req.session);
	if(! req.session.is_user_logged_in)
		res.redirect("/login");
	
	next();
}


module.exports=router;