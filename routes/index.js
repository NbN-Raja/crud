var express = require('express');
var router = express.Router();

const homecontroller= require("../controller/homecontroller");
/* GET home page. */
router.get('/', homecontroller.get)
  


module.exports = router;
