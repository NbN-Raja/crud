var express = require('express');
var router = express.Router();
const users = require("../model/usersSchema")


/* GET home page. */
router.get('/', (req,res)=>{
    const email = req.body.email
   
    users.find({}, (err, users) => {
        
            if (err) {
                console.log(err);
            }
            else {
                res.json(users);
            }
        });
    
})
  


module.exports = router;