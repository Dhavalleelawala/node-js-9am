const {Router} = require('express');

const { getData, inserData } = require('../controllers/user.controller');

let userRouter = Router();

userRouter.get('/',getData)
userRouter.post('/insertData',inserData)

module.exports = userRouter;

