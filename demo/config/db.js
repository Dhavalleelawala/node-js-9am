
const mongoose = require('mongoose');

const db = async()=>{
    await mongoose.connect("mongodb://localhost:27017");
    console.log("database connected");
}

module.exports = db;

// mongoose.connect("mongodb+srv://dhavalleelawala:12345@cluster0.pwjdduw.mongodb.net/user");
// const db = mongoose.connection;

// db.on('connected',(err)=>{  
//     if(!err){
//         console.log("database is conn");
//     }
// });
