var express = require('express');
var Server = require('../models/server');
var router = express.Router();

router.route('/')
.get(function(req, res){
  Server.find(function(err, servers){
    if (err){
      return next(err);
    }
    res.json(servers);
  });
})
.post(function(req, res){
  var server = new Server();
  server.name= req.body.name;  //Ticket Creator
  server.address= req.body.address;    //Admin who decided to handle this ticket
  server.author= req.body.author;
  server.save(function(err){
    if (err){
      return res.status(400).json({error: err});
    }
    return res.status(200).json({message: 'server saved'});
  });
});

router.route('/:serverId')
.delete(function(req, res){
  Server.remove({
    _id: req.params.serverId
  }, function(err, ticket){
    if (err){
      return res.status(400).json({error: err});
    }
    return res.status(200).json({message: 'server deleted'});
  });
});

module.exports = router;
