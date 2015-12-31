var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var user = new Schema({
  username: {type: String, unique: true},
  createdAt: Date,
  updatedAt: Date,
  firstName: String,
  lastName: String,
  mail: String,
  salt: String,
  pass: String,
  city: String,
  country: String,
  photo: String,
  admin: Boolean
})

//User.pre

user.pre('save', function(next){
  var currentDate = new Date();
  this.updatedAt = currentDate;
  if (!this.createdAt){
        this.createdAt = currentDate;
        this.country = "France";
        this.admin = false;
        this.photo = 'https://furnex.ca/assets/default_profile_image-05d39cb795bbb98e10c104b8f4aba70677a3f9f6c13253bf94f16181e9ee5a99.gif'
  }
  next();
});

//Users Methods

user.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.pass = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
}

user.methods.validPassword = function(password){
    var pass = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.pass === pass;
}

user.methods.generateJWT = function(){
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({
        _id: this._id,
        username: this.username,
        admin: this.admin,
        exp: parseInt(exp.getTime() / 1000)
    }, 'AmdoulahSaGrossMaman');
};

module.exports = mongoose.model('user', user);
