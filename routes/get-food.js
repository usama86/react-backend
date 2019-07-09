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


router.get('/', function(req, res, next) {
  var resultArray = [];



  mongo.connect(url, function(err, db)  {
    assert.equal(null, err);
    var cursor = db.collection('food').find();     
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



router.post('/', function(req, res, next) {
    var name = req.body.Name;
    var price = req.body.price;
    var tq =  req.body.totalquantity;
    var description = req.body.des; 
    var type = req.body.Type;
    var date = req.body.Date;
        
      mongo.connect(url, function(err, db )  {
    
            
    
                assert.equal(null, err);
                //  var cursor = db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role});
                  db.collection('food').insertOne({name:name ,price:price ,totalQuantity:tq, description:description,type:type,date:date}, 
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