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

function showPart(req, res) {
    //This will be the controller for when the part is clicked
    //Needs to show name, price, url

}

function deletePart(req, res) {
    //This can either be in controller/parts or controller/list
        //for controller/parts it would be Part.delete(~~~)
        //for controller/list it could be List.pop();  --> It may need to be in controller/parts, pop takes the top of the array 
}