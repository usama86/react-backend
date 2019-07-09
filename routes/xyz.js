var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert');

/* GET users listing. */


var url = 'mongodb://localhost:27017/Greenlight';
var resultArray = [];



router.post('/', function(req, res, next) {
    var Name = req.body.Name;
    var CNICNo = req.body.CNICNo;
    var Email =  req.body.email;
    var MobileNo = req.body.mobile; 
    var DateOfVisit = req.body.dateOfVisit;
    var TimeOfVisit = req.body.timeOfVisit;
    var CarPlateNo = req.body.CarPlateNo;
    var Role= req.body.roleName;
        
  mongo.connect(url, function(err, db )  {

        
            assert.equal(null, err);   //
            //  var cursor = db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role});
            db.collection('Users').insertOne({Name:Name , CNICNo:CNICNo ,email:Email, mobile:MobileNo ,dateOfVisit:DateOfVisit,timeOfVisit:TimeOfVisit,CarPlateNo:CarPlateNo, roleName:Role}, 
            function (error) {
                  if(error) {
                      res.send("dont");
                      
                     // return 
                  } 
                  else {
        
                      res.send("do");
                    // return 
                  }
              });

            });
  
});

module.exports = router;