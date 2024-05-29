const express = require('express');
const { router } = require('./routers/user.router');
const db = require('./config/db');
const cookies = require('cookie-parser');

const app = express();

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));

app.use(express.static('public'))

app.use(cookies());

app.use(router);

app.listen(8081,(err)=>{
    db();
    if(!err){
        console.log("server start:- http://localhost:8081");
    }
})