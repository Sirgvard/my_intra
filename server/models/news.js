var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var news = new Schema({
    title: String,
    createdAt: Date,
    updatedAt: Date,
    author: String,
    description: String
});

// TASK PRE

news.pre('save', function(next){
    var currentDate = new Date();
    this.updatedAt = currentDate;
    if (!this.createdAt){
        this.createdAt = currentDate;
    }
    next();
});

module.exports = mongoose.model('news', news);
