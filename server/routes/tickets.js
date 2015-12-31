var express = require('express');
var Ticket = require('../models/ticket');
var router = express.Router();

router.route('/')
.get(function(req, res){
  Ticket.find({}, function(err, tickets){
    if (err){
      return res.status(400).json({error: err});
    }
    return res.json(tickets);
  });
})
.post(function(req, res){
  var ticket = new Ticket();
  ticket.title = req.body.title;
  ticket.author= req.body.author;  //Ticket Creator
  ticket.handler= req.body.handler;    //Admin who decided to handle this ticket
  ticket.isInProgress= req.body.isInProgress;
  ticket.expectedDate= req.body.expectedDate;
  ticket.level= req.body.level;
  ticket.type1= req.body.type1;
  ticket.type2= req.body.type2;
  ticket.type3= req.body.type3;
  ticket.impact= req.body.impact;
  ticket.description= req.body.description;
  ticket.isValidated= req.body.isValidated;
  ticket.weight = req.body.weight;
  ticket.authorUsername = req.body.authorUsername;
  ticket.room = req.body.room;
  ticket.save(function(err){
    if (err){
      return res.status(400).json({error: err});
    }
    return res.status(200).json({message: 'ticket saved'});
  });
});

router.route('/:ticketId')
.get(function(req, res){
  Ticket.findById(req.params.ticketId, function(err, ticket){
    if (err){
      return res.status(400).json({error: err});
    }
    return res.status(200).json(ticket);
  });
})
.put(function(req, res){
  Ticket.findById(req.params.ticketId, function(err, ticket){
    if (err){
      return res.status(400).json({error: err});
    }
    ticket.author= req.body.author;  //Ticket Creator
    ticket.handler= req.body.handler;    //Admin who decided to handle this ticket
    ticket.isInProgress= req.body.isInProgress;
    ticket.expectedDate= req.body.expectedDate;
    ticket.level= req.body.level;
    ticket.type1= req.body.type1;
    ticket.type2= req.body.type2;
    ticket.type3= req.body.type3;
    ticket.impact= req.body.impact;
    ticket.isValidated= req.body.isValidated;
    ticket.handlerUsername = req.body.handlerUsername;
    ticket.comments = req.body.comments;
    ticket.save(function(err, ticket){
      if (err){
        return res.status(400).json({error: err});
      }
      return res.status(200).json(ticket);
    });
  });
})
.delete(function(req, res){
  Ticket.remove({
    _id: req.params.ticketId
  }, function(err, ticket){
    if (err){
      return res.status(400).json({error: err});
    }
    return res.status(200).json({message: 'ticket deleted'});
  });
});

router.route('/currentTickets/current')
.get(function(req, res){
  Ticket.find({'isValidated' : false}, function(err, ticket){
    if (err){
      return res.status(400).json({error: err});
    }
    return res.status(200).json(ticket);
  });
});


router.route('/specificUser/:AuthorId')
.get(function(req, res){
  Ticket.find({'author': req.params.AuthorId}, function(err, ticket){
    if (err){
      return res.status(400).json({error: err});
    }
    return res.status(200).json(ticket);
  });
});


module.exports = router;
