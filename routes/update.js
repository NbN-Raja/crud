
var express = require('express');

var router = express.Router();



const Users = require("../model/usersSchema");


// const db = require("../model/db")


// /* GET home page. */

router.post('/update/:id', (req,res)=>{
    
  
        Users.findByIdAndUpdate({_id:req.params.id},req.body.email,(err,users)=>{
          if (err) {
            console.log(err);
          }else{
            
          }
        })
        
          
        
        
          
})
 module.exports = router;

