var User = require('../model/user');
var List = require('../model/list');
var Part = require('../model/parts');

module.exports = {
    index,
    update,
    delete
}

function index(req, res) {
    List.find({}, function(err, list){
        res.render('list/index', {title: 'Current Parts', list});
    })
}

function update(req, res) {
    List.findByIdAndUpdate(req.params.id, req.body, function(err, list) {
        res.redirect('/list/');
    })
}

function delete(req, res) {
    List.findByIdAndDelete(req.params.id, function(err, list) {
        res.redirect('/list/');
    }
}