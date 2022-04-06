
const users = require("../model/usersSchema")

module.exports ={

    get: (req,res)=>{
        const email = req.body.email
        const id = req.body.id
   
    users.find({}, function (err, users) {
            res.render('about', {
                usersList: users,
            });


        });
        
    }
}

