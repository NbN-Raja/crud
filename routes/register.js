var express = require('express');
var router = express.Router();

const registercontroller= require("../controller/registercontroller");
/* GET home page. */
router.get('/', registercontroller.get)
router.post('/', registercontroller.post)
router.put('/update', registercontroller.post)
  


module.exports = router;
