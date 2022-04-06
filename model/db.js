




const mongoose = require('mongoose');

const db =mongoose.connect("mongodb://localhost:27017/crud",{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connection succcessful");
}).catch((error)=>{
    console.log(error);
})

module.exports = db;