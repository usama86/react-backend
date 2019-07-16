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
    var Password = req.body.password;
    var Email =  req.body.email;
    var MobileNo = req.body.mobile; 
    var Role = req.body.role;
    var add = req.body.Address;
    var dt = req.body.Date;

    
  mongo.connect(url, function(err, db )  {

    if(Role=="Vendor"){
        
        var rA = [];



  mongo.connect(url, function(err, db)  {
    assert.equal(null, err);
    var cursor = db.collection('users').find();     //{"name":"ahsan"}
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      rA.push(doc);
      
    }, function() {
      db.close();
      res.json(
        rA
          
            );
    });
  });
          
        assert.equal(null, err);
        //  var cursor = db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role});
          db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role,address:add,registeredDate:dt,status:'active'}, 
          function (error) {
              if(error) {
                  res.send("don't");
                  
                 // return 
              } else {
                  res.send("do");
                // return 
              }
          });

    
    }
    else{

        assert.equal(null, err);
        //  var cursor = db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role});
          db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role,address:add,registeredDate:dt,status:'active'}, 
          function (error) {
              if(error) {
                  res.send("don't");
                  
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