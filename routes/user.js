var router = require('express').Router();
var usersCtrl = require('../controller/user');

router.get('/user', usersCtrl.index)


router.post('/list', isLoggedIn, usersCtrl.addPart);

router.delete('/list/:id', usersCtrl.deletePart);


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;