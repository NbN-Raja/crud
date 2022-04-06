var express = require('express');
var router = express.Router();
const aboutcontroller = require("../controller/aboutcontroller");

/* GET users listing. */
router.get('/', aboutcontroller.get)

module.exports = router;