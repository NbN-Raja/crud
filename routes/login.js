var express = require('express');
var router = express.Router();

const logincontroller= require("../controller/logincontroller");
/* GET home page. */
router.get('/', logincontroller.get)
router.post('/', logincontroller.post)
  


module.exports = router;
