var express = require('express');
var router = express.Router();

router.use("/", require("../controller/home"));
router.use("/show", require("../controller/show"));



module.exports=router;