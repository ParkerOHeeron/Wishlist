var List = require('../model/list');


module.exports = {
    create,
    delete: deleteOne
}

function create(req, res) {
    List.findById(req.params.id, function(err, list) {
        console.log(req.body, "req.body in parts controller");
        list.parts.push(req.body);
        list.save(function(err) {
            res.redirect(`/list/${list._id}`);
        })
    })
}

function deleteOne(req, res) {
    List.findByIdAndDelete
}