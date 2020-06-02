const User = require('../model/user');



module.exports = {
    index,
    addPart,
    deletePart
};

function index(req, res, next) {
    console.log(req.query)

    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};

    let sortKey = req.query.sort || 'name';
    User.find(modelQuery)
    .sort(sortKey).exec(function(err, user) {
        if (err) return next(err);

        res.render('user/index', {
            user, 
            user: req.user,
            name: req.query.name,
            sortKey
        });
    });
}

/*function index(req, res) {
    User.find({}, function(err, user) {
        res.render('user/')
    })
}*/



function addPart(req, res, next){
    req.user.list.push(req.body);
    req.user.save(function(err){
        res.redirect('/user');
    })
}

function deletePart(req, res, next){
    User.findOne({'part._id': req.params.id}, function(err, user) {
        user.list.id(req.params.id).remove();
        user.save(function(err) {
            res.redirect('/user');
        })
    })
}