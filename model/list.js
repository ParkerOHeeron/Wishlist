var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var partSchema = new Schema({
    url: String,
    name: String,
    price: {type: Number, min: 1}
}, {
    timestamps: true
});

var listSchema = new Schema({
    parts: [partSchema] 
} , {
    timestamps: true
});




module.exports = {
    addPart,
    deletePart
};


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