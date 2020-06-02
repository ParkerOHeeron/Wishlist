var router = require('express').Router();
var passport = require('passport');

router.get('/', function(req, res) {
    res.redirect('/user');
});

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/user',
        failureRedirect: '/user'
    }
));

router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/user');
});

module.exports = router;