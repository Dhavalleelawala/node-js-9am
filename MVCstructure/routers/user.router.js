const {Router} = require('express');
const { home, signup, update, deletedata, indexPage, tablePage, formPage, login, loginPage, signupPage } = require('../controllers/user.controller');
const userAuth = require('../middleware/user.auth');

const router = Router();

router.get('/',indexPage);
router.get('/table',tablePage);
router.get('/form-basic',formPage);

router.get('/data',home);

router.post('/signup',userAuth,signup);
router.get('/signup',signupPage);

router.patch('/update/:id',update);
router.delete('/delete/:id',deletedata);
router.post('/login',login)
router.get('/login',loginPage);

module.exports = { router };