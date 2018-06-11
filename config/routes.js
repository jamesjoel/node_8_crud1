var express = require('express');
var router = express.Router();

router.use("/", require("../controller/home"));
router.use("/show", require("../controller/show"));
router.use("/student", require("../controller/student"));
router.use("/login", require("../controller/login"));



module.exports=router;