var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticket = new Schema({
    title: String,
    createdAt: Date,
    updatedAt: Date,
    author: String,     //Ticket Creator
    handler: String,    //Admin who decided to handle this ticket
    isInProgress: Boolean,
    expectedDate: Date,
    level: String,
    type1: String,
    type2: String,
    type3: String,
    impact: String,
    isValidated: Boolean,
    description: String,
    weight: Number,
    room: String,
    authorUsername: String,
    handlerUsername: String,
    comments:[]
});

// TASK PRE

ticket.pre('save', function(next){
    var currentDate = new Date();
    this.updatedAt = currentDate;
    if (!this.createdAt){
        this.isInProgress = false;
        this.isValidated = false;
        this.createdAt = currentDate;
    }
    next();
});

module.exports = mongoose.model('ticket', ticket);
