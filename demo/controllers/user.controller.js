const user = require("../models/user.schema");

const home = (req,res)=>{
    res.send("Hello from controller..");
}

const signup = async (req,res)=>{
    let data = await user.create(req.body);
    return res.send(data);
}

module.exports = {home,signup}