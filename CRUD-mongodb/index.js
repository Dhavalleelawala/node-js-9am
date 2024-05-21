const express = require('express');
const user = require('./models/user.Schema');
const db = require('./config/database');
const multer = require('multer');
const path = require('path')

const port = 8081;

const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

//app.use('/uploads',express.static(path.join(__dirname+'/uploads')))

app.use('/uploads',express.static('uploads'))

//file upload start

const fileUpload = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'uploads');
    },
    filename : (req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const imageUpload = multer({storage: fileUpload}).single('image');

//file upload end

app.get('/',(req,res)=>{

    user.find({}).then((user)=>{
       // console.log(user);
        return res.render('form',{
            user
        })
    }).catch((err)=>{
        console.log(err);
        return false;
    })
    
})

app.post('/insertData',imageUpload,(req,res)=>{
    const {id,name,email,password,gender,hobby,city,phone}=req.body

    if(id){
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
    
})

app.get('/deleteData',(req,res)=>{
    let id =req.query.id;
    console.log(id);

    user.findByIdAndDelete(id).then((data)=>{
        console.log("data deleted.");
        return res.redirect('/');
    }).catch((err)=>{
        console.log(err);
        return false;
    })

})

app.get('/editData/:id',(req,res)=>{
    let id = req.params.id;

    user.findById(id).then((user)=>{
        console.log(user);
        return res.render('edit',{
            user
        });
    }).catch((err)=>{
        console.log(err);
        return false;
    })
});
//let id = '';
// app.post('/editData',(req,res)=>{
    
//     const {id,name,email,password,gender,hobby,city,phone} = req.body;

//     console.log(id);

//     user.findByIdAndUpdate(id,{name,email,password,gender,hobby,city,phone}).then((data)=>{
//         console.log("data updated.");
//         //id=''
//         return res.redirect('/');
//     }).catch((err)=>{
//         console.log(err);
//         return false;
//     })
    
// })

app.listen(port,(err)=>{
    if(!err){
        console.log("server start. http://localhost:"+port);
    }
})