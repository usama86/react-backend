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
var name = req.body.Name;
var Price = req.body.price;
var Totalquantity = req.body.totalquantity;
var  desc =  req.body.des;
var type = req.body.Type; 
var date = req.body.Date;

    
    
  mongo.connect(url, function(err, db )  {

        
        
            assert.equal(null, err);
            
            //  var cursor = db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role});
            db.collection("food").update({_id:objectId(ID)},{$set:{name:name , price:Price , totalQuantity:Totalquantity ,description:desc, type:type , date:date}}, 
    //        db.getCollection('users').updateOne({"firstName":"Ahsan"},{$set:{"password":"ali"}});    
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