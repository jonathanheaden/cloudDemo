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
    var insertDocument = function(db, callback) {
        db.collection('responses').insertOne({
            initiative :req.body.initiative, 
            rating: req.body.rating,
            likeText : req.body.likeText,
            dislikeText : req.body.dislikeText ,
            suggestionText : req.body.suggestionText
        },function(err, result) {callback()});
    }
    MongoClient.connect(url, function(err, db) {
        insertDocument(db,function(){})
    })
    res.send(req.body)
})

router.get('/demo', function(req, res, next) {
    res.render('demo', { title: 'Cloud Demo' });
  });


module.exports = router;
