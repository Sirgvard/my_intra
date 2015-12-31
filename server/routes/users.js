var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

router.route('/')
.get(function(req, res){
  User.find(function(err, users){
    if (err){
      return next(err);
    }
    return res.json(users);
  });
});

router.route('/:userId')
.get(function(req, res){
  User.findById(req.params.userId, function(err, user){
    if (err){
      return res.status(400).json({error: err});
    }
    return res.status(200).json(user);
  })
})
.delete(function(req, res){
  User.remove({
    _id: req.params.userId
  }, function(err, user){
    if (err){
      return res.status(400).json({error: err});
    }
    return res.status(200).json({message: 'user deleted'});
  });
})
.put(function(req, res){
  User.findById(req.params.userId, function(err, user){
    if (err){
      return res.status(400).json({error: err});
    }
    if (req.body.newUsername != null){
      user.username= req.body.newUsername;
    }
    if (req.body.newMail != null){
      user.mail= req.body.newMail;
    }
    if (req.body.newFirstName != null){
      user.firstName= req.body.newFirstName;
    }
    if (req.body.newLastName != null){
      user.lastName= req.body.newLastName;
    }
    if (req.body.newPhoto != null){
      user.photo= req.body.newPhoto;
    }
    user.save(function(err, user){
      if (err){
        return res.status(400).json({error: err});
      }
      return res.status(200).json(user);
    });
  });
});

router.route('/updatePassword/:userId')
.put(function(req, res){
  User.findById(req.params.userId, function(err, user){
    if (err){
      return res.status(400).json({error: err});
    }
    if (req.body.newPassword != null && user.validPassword(req.body.oldPassword)){
      user.setPassword(req.body.newPassword);
    }
    user.save(function(err, user){
      if (err){
        return res.status(400).json({error: err});
      }
      return res.status(200).json(user);
    });
  });
});

router.post('/register', function(req, res){
  if (!req.body.username ||
    !req.body.password ||
    !req.body.firstName||
    !req.body.lastName ||
    !req.body.eMail    ||
    !req.body.city)
    {
      return res.status(400).json({err: 'Please fill out all fields'});
    }
    var newUser = new User();
    newUser.username = req.body.username;
    newUser.setPassword(req.body.password);
    newUser.mail = req.body.eMail;
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.city = req.body.city;
    newUser.save(function(err, user){
      if (err){
        console.log(err);
        return res.status(400).json({error: err});
      }
      return res.json({
        id: user._id,
        token: user.generateJWT()
      });
    });
  });

  router.post('/login', function(req, res, next){
    if (!req.body.username || !req.body.password){
      return res.status(400).json({err: 'Please fill out all fields'});
    }
    passport.authenticate('local', function(err, user, info){
      if (err){
        return res.status(500).json({err: err});
      }
      if (!user){
        return res.status(401).json({err: info});
      }
      else{
        res.status(200).json({token: user.generateJWT()});
      }
    })(req, res, next);
  });

  router.get('/logout', function(req, res){
    req.logout();
    res.status(200).json({status: 'Bye!'});
  });

  module.exports = router;
