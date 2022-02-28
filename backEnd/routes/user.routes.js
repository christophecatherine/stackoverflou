const router = require('express').Router();
const userCtrl = require('../controllers/user.ctrl');

// Auth
router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.put('/:userId', userCtrl.updateOne);

module.exports = router;
