var express = require('express');
var router = express.Router();

var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');


/* GET users listing. */


var url = 'mongodb://localhost:27017/grabABite';
var resultArray = [];




router.post('/', function(req, res, next) {

 var ID = req.body.oID;
var  Rtime=req.body.time;
    
    
  mongo.connect(url, function(err, db )  {

        
        
            assert.equal(null, err);
            
            //  var cursor = db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role});
            db.collection("order").update({_id:objectId(ID)},{$set:{status:"Recieved",RecievedTime:Rtime}}, 
    //        db.getCollection('users').updateOne({"firstName":"Ahsan"},{$set:{"password":"ali"}});    
                function (error) {
                  if(error) {
                      res.send("dont");
                      
                     // return 
                  } else {
                      res.send("do");
                    // return 
                  }
              }
              
              
              );
        

  });
  
});


module.exports = router;