const userAuth = (req,res,next) =>{

    const {username, email, password, phone} = req.body;

    if(username && email && password && phone){
        next();
    }else{
        res.send("invalid data");
    }

}

module.exports = userAuth;