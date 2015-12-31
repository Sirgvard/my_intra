var express = require('express');
var News = require('../models/news');
var router = express.Router();

router.route('/')
.get(function(req, res){
  News.find({}, function(err, news){
    if (err){
      return res.status(400).json({error: err});
    }
    return res.json(news);
  });
})
.post(function(req, res){
  var news = new News();
  news.title = req.body.title;
  news.author= req.body.author;
  news.description= req.body.description;
  news.save(function(err){
    if (err){
      return res.status(400).json({error: err});
    }
    return res.status(200).json({message: 'News posted !'});
  });
});

router.route('/:newsId')
.delete(function(req, res){
  News.remove({
    _id: req.params.newsId
  }, function(err, news){
    if (err){
      return res.status(400).json({error: err});
    }
    return res.status(200).json({message: 'news deleted'});
  });
});

module.exports = router;
