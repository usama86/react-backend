var express = require('express');
var router = express.Router();

var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');


/* GET users listing. */


var url = 'mongodb://localhost:27017/grabABite';
var resultArray = [];




router.post('/', function(req, res, next) {

 var ID = req.body.id;
var FirstName = req.body.firstName;
var LastName = req.body.lastName;
var Password = req.body.password;
var Email =  req.body.email;
var MobileNo = req.body.mobileNo; 
var Role = req.body.role;
var Address = req.body.address;
var date = req.body.date;
var Status =  req.body.Status;
var VendorName = req.body.vendorName;
    
    
  mongo.connect(url, function(err, db )  {

        
        if(Role === "Customer"){
            assert.equal(null, err);
            
            //  var cursor = db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role});
            db.collection("users").update({_id:objectId(ID)},{$set:{firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role,address:Address,registeredDate:date}}, 
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
        } 

        else if(Role==="Vendor")
        {

            assert.equal(null, err);
            
            //  var cursor = db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role});
            db.collection("users").update({_id:objectId(ID)},{$set:{vendorName:VendorName,firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role,address:Address,registeredDate:date,status:Status}}, 
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

        }
        else if(Role==="Delivery Person")
        {

            assert.equal(null, err);
            
            //  var cursor = db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role});
            db.collection("users").update({_id:objectId(ID)},{$set:{firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role,address:Address,registeredDate:date,status:Status}}, 
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

        }
  });
  
});

  

  
  

module.exports = router;