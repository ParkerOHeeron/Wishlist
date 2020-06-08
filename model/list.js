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
    name: String, 
    parts: [partSchema]
} , {
    timestamps: true}
);


module.exports = mongoose.model('List', listSchema);
