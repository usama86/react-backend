var express = require('express');
var router = express.Router();

var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

/* GET users listing. */


var url = 'mongodb://localhost:27017/grabABite';
var resultArray = [];



router.post('/', function(req, res, next) {
    var date = req.body.date;
    var subtotal = req.body.subtotal;
    var dfees = req.body.dfees;
    var totals =  req.body.totals;
    var fdetail = req.body.fdetail; 
    

    


    
  mongo.connect(url, function(err, db )  {

   
   

        assert.equal(null, err);
        //  var cursor = db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role});
          
          db.collection("order").insertOne({fooddetails:fdetail,Date:date,SubTotal:subtotal,DeliveryFees:dfees,Total:totals},

          
          
            function (error) {
              if(error) {
                  res.send("don't");
                  
                 // return 
              } else {
                  res.send("do");
                // return 
              }
          });

  });
  
});




module.exports = router;