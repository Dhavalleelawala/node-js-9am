const {Router} = require('express');
const { home, signup } = require('../controllers/user.controller');

const router = Router();

router.get('/',home);

router.post('/signup',signup);

module.exports = { router };