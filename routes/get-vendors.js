var express = require('express');
var router = express.Router();

var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

/* GET users listing. */


var url = 'mongodb://localhost:27017/grabABite';
var resultArray = [];
var a;
var b;


router.post('/', function(req, res, next) {
  var x=req.body.email;
  var y=req.body.password;
 
  mongo.connect(url, function(err, db )  {


    assert.equal(null, err);
    var cursor = db.collection('users').find({email:x,password:y});
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push( 
        doc);

        
              
        // resultArray["name"]       
    }, function() {
      if ( resultArray.length == 0) {
        res.send("don't");
        
        // array empty or does not exist
    }
    else {
      res.send("do");

      
    }
     
      
//      console.log(resultArray[0].name ); 
  //    console.log(resultArray[0].password );
    
      db.close();

    });
  });

  
 
 






  //console.log(x); 
  //console.log(y); 
  
  

});


router.get('/', function(req, res, next) {
  var resultArray = [];



  mongo.connect(url, function(err, db)  {
    assert.equal(null, err);
    var cursor = db.collection('users').find({"roleName":"Vendor"});     //{"name":"ahsan"}
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