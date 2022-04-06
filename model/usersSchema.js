const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    address:{
        type:String
    },
    age:{
        type:Number
    },
    birthdate:{
        type:Number
    },
    city:{
        type:String
    },
    course:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },

})

const users = mongoose.model("users",usersSchema);

module.exports = users;