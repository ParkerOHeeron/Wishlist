var mongoose = require('mongoose');

const parts = [];
module.exports = {getAll, create};

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true});

mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to: ${process.env.DATABASE_URL}');
});

function getAll(){
    return parts;
}

function create(part) {
    parts.push(part);
}

module.exports = mongoose;