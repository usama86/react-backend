var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

/* GET users listing. */


var url = 'mongodb://localhost:27017/grabABite';


/*
router.get('/', function(req, res, next) {


    res.json([
        {id:1,username:"somebody0"},
        {id:2, username: "somebody_else"}
        
          ]);
});

*/

router.get('/', function(req, res, next) {
    var resultArray = [];



    mongo.connect(url, function(err, db)  {
      assert.equal(null, err);
      var cursor = db.collection('users').find({"name":"ahsan"});
      cursor.forEach(function(doc, err) {
        assert.equal(null, err);
        resultArray.push(doc);
        
      }, function() {
        db.close();
        res.json(
          resultArray
            
              );
      });
    });
  });




module.exports = router;
