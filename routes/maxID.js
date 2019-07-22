var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

/* GET users listing. */


var url = 'mongodb://localhost:27017/grabABite';

var a;
var b;



router.post('/', function(req, res, next) {
  var resultArray = [];
  var x=req.body.name;
 
  mongo.connect(url, function(err, db )  {

    assert.equal(null, err);
    
    
    
    
    
    cursor=db.collection('order').find({}).sort({oID:-1}).limit(1) 
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);               
    }, function() {
      if ( resultArray.length == 0) {
        var msg1="don't";
        res.send(msg1);
     
    }
    else {
      var msg="do ";
     var token = "kjdgksdgfhfd ";    
      res.send(resultArray);
    }
    
    
    });
    
  });
 
 






  //console.log(x); 
  //console.log(y); 
  
  

});




module.exports = router;