var router = require('express').Router();
var usersCtrl = require('../controllers/users');

router.get('/users', usersCtrl.index)

function isLoggedIn(req, res, next){
    
}

module.exports = router;