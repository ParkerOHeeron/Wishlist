const List = require('../model/list');


module.exports = {
    //new: newPartBox,
    createPart
    //deletePart
}

//function newPartBox(req, res) {
//    console.log(req.params.id)
//    res.render('parts/new', {title: 'Add Part'});
//}

function createPart(req, res) {
    List.findById(req.params.id, function(err, list) {
        list.parts.push(req.body);
        list.save(function(err) {
            res.redirect(`/list/${list._id}`);
        }); 
    });
}

