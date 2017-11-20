var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var Response = require('../models/Response');

/*
MongoClient.connect(process.env.MONGODB_URI, (err, database) => {
    // ... start the server
    console.log('connect to db ' + process.env.MONGODB_URI)
    if (err) {console.log(err)}
  })
*/

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cloud Demo' });
});

router.post('/demo',function(req,res) {
    console.log('query string')
    console.log(req.query)
    var survey = new Response({
        initiative :req.query.initiative, 
        rating: req.query.rating,
        likeText : req.query.likeText,
        dislikeText : req.query.dislikeText ,
        suggestionText : req.query.suggestionText
    })
    console.log('db record')
    console.log(survey)
    survey.save();
})
router.get('/demo', function(req, res, next) {
    res.render('demo', { title: 'Cloud Demo' });
  });


module.exports = router;
