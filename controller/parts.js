const Part = require('../config/data');

module.exports = {
    index,
    create
}

function index(req, res) {
    res.render('index', { parts: Part.getAll()})
}

function create(req, res) {
    Part.create(req.body);
}

function addPart(req, res) {
    
}