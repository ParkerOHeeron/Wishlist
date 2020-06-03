var router = require('express').Router();
var passport = require('passport');

router.get('/', function(req, res) {
    res.redirect('/user'); //This gives the user the ability to choose multiple lists first
});

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/list',
        failureRedirect: '/auth/google'
    }
));

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = router;