var express = require('express');
var router = express.Router();

var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');


/* GET users listing. */


var url = 'mongodb://localhost:27017/grabABite';
var resultArray = [];




router.post('/', function(req, res, next) {

var FirstName = req.body.firstname;
var LastName = req.body.lastname;
var newPassword = req.body.password;
var Email =  req.body.email;
var MobileNo = req.body.mobile; 
var Address = req.body.Address;

    
    
  mongo.connect(url, function(err, db )  {


            assert.equal(null, err);
            
            //  var cursor = db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role});
            db.collection("users").update({email:Email},{$set:{firstName:FirstName , lastName:LastName , password:newPassword , phoneNo:MobileNo,address:Address}}, 
    //        db.getCollection('users').updateOne({"firstName":"Ahsan"},{$set:{"password":"ali"}});    
                function (error) {
                  if(error) {
                                res.send("dont");
                                console.log("nhi chala")
                                console.log("dataabse wala pass "+DBOLDPASS+" old pass jo likha ha "+c+"Emailllll "+ em)
                            } 
                  else      {
                                res.send("do");
                            }
              });

        
  });
  
});

  

  
  

module.exports = router;