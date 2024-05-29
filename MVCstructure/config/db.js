// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://krishnadesai4:12345@cluster0.jw941n0.mongodb.net/user")

// const db=mongoose.connection;

// db.on("connected",(err)=>{
//     if(!err){
//         console.log("Database is Connected..");
//     }
// })


const mongoose = require("mongoose");

const db = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://dhavalleelawala:12345@cluster0.pwjdduw.mongodb.net/");
        console.log("Database connected...");
    } catch (error) {
        console.log(error);
    }
}

module.exports=db;