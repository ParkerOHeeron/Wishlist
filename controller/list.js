var User = require('../model/user');
var List = require('../model/list');
var Part = require('../model/parts');

module.exports = {
    index,
    update,
    showUpdate,
    delete: deleteOne,
    new: newListView,
    createList
};

function index(req, res) {
    List.find({}, function(err, list){
        res.render('list/index', {title: 'Current Parts', list});
    })
}

function newListView(req, res) {
    res.render('list/new', {title: 'Create a List'});
}

function createList(req, res) {
    console.log("in createList");
    var list = new List(req.body);
    list.save(function(err) {
        if (err) {
            console.log(err,"err in createList");
            console.log(list,"list in createList");
            return res.redirect('/list/new', {title: 'Create a List'});
        }
        console.log(list);
        res.redirect('/list');
    })
}

function update(req, res) {
    List.findByIdAndUpdate(req.params.id, req.body, function(err, list) {
        res.redirect('/list/');
    })
}

function showUpdate(req, res) {
    List.findById(req.params.id, function(err, list) {
        console.log(list)
        res.render('list/update', {title: 'Update List', list: list});
    })
}

function deleteOne(req, res) {
    List.findByIdAndDelete(req.params.id, function(err, list) {
        res.redirect('/list/');
    });
}