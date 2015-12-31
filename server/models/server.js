var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var server = new Schema({
    name: String,
    createdAt: Date,
    updateAt: Date,
    address: String,
    author: String
});

// TASK PRE

server.pre('save', function(next){
    var currentDate = new Date();
    this.updatedAt = currentDate;
    if (!this.createdAt){
        this.createdAt = currentDate;
    }
    next();
});
module.exports = mongoose.model('server', server);
