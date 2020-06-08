var List = require('../model/list');


module.exports = {
    create
}

function create(req, res) {
    List.findById(req.params.id, function(err, list) {
        list.parts.push(req.body);
        console.log(req.body);
        flight.save(function(err) {
            res.redirect(`/list/${list._id}`);
        })
    })
}