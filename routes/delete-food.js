var express = require('express');
var router = express.Router();

var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');


/* GET users listing. */


var url = 'mongodb://localhost:27017/grabABite';
var resultArray = [];




router.post('/', function(req, res, next) {

 var ID = req.body.ID;    
    
  mongo.connect(url, function(err, db )  {

        
        
            assert.equal(null, err);
      
            db.collection("food").remove( { _id:objectId(ID)}, 

                function (error) {
                  if(error) {
                      res.send("dont");
                      
                     // return 
                  } else {
                      res.send("do");
                    // return 
                  }
              });
        

  });
  
});

  

  
  

module.exports = router;