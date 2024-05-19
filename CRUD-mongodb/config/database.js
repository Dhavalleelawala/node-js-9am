const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/userDB');

const db = mongoose.connection;

db.on('connected',(err)=>{
    if(!err){
        console.log("database in connected.");
    }
})

module.exports = db