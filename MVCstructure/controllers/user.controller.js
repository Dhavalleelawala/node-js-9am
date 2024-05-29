const user = require("../models/user.schema");

const home = async (req,res)=>{
    let data = await user.find();
    res.send(data);

}
// const create = (req,res)=>{
//     const {username, password}= req.body;
//     user.create({username, password}).then((data)=>{
//         console.log(data);
//         console.log("Data inserted..");
//         res.send("data inserted...");
//     }).catch((err)=>{
//         console.log(err);
//         return false;
//     })
// }

const signup = async(req,res)=>{
    let data = await user.create(req.body);
    return res.render('authentication-login')
    res.send(data);
}

const login = async(req,res)=>{
    const {email, password} = req.body;

    let User = await user.findOne({email : email})

    if(User){
        if(User.password === password){
            return res.cookie('user',User.email).send("Login");
        }
        console.log("Wrong password....");  
        return res.redirect('login');      
    }else{
        console.log("Wrong email....");
        return res.redirect('login')
    }
}

const update = async (req,res)=>{
    let {id} = req.params;

    try{
        let data = await user.findByIdAndUpdate(id,req.body);
        console.log(data);
        res.send(data);
    }catch(error){
        console.log(error);
    }
}
const deletedata = async (req,res)=>{
    let {id} = req.params;

    try{
        let data = await user.findByIdAndDelete(id);
        console.log(data);
        res.send(data);
    }catch(error){
        console.log(error);
    }
}


const indexPage = (req,res)=>{
    return res.render('index');
}

const tablePage = async(req,res)=>{

    try {
        let data = await user.find({});
        console.log(data);
        return res.render('table',{
            data
        });
    } catch (error) {
        console.log(error);
    }
}

const formPage = (req,res)=>{
    let {user} = req.cookies;
    console.log(req.cookies);
    return res.render('form-basic');
}

const loginPage = (req,res)=>{
    return res.render('login');
}

const signupPage = (req,res)=>{
    return res.render('authentication-register');
}

module.exports = {home,signup , update, deletedata, indexPage, tablePage, formPage , login, loginPage,signupPage}