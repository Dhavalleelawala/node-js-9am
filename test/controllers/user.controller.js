const user = require('../models/user.Schema');

const getData = (req,res)=>{
    user.find({}).then((user)=>{
        // console.log(user);
         return res.render('form',{
             user
         })
     }).catch((err)=>{
         console.log(err);
         return false;
     })
}

const inserData = (req,res)=>{
    const {id,name,email,password,gender,hobby,city,phone}=req.body

    if(id){

        let image = "";
        
        if(req.file){   
            image = req.file.path;
        }

        user.findByIdAndUpdate(id,{name,email,password,gender,hobby,city,phone}).then((data)=>{
            console.log("data updated.");
            //id=''
            return res.redirect('/');
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }
    else{
 
        let image = "";
        
        if(req.file){   
            image = req.file.path;
        }

            user.create({name,email,password,gender,hobby,city,phone,image})
        .then((data)=>{
            console.log("data inserted.");
            return res.redirect('/');
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }
}

module.exports = {getData,inserData}