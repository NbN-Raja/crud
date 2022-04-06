var express = require('express');
var router = express.Router();
const userscontroller = require("../controller/userscontroller");

/* GET users listing. */
router.get('/', userscontroller.get)

module.exports = router;
