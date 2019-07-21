var express = require('express');
var router = express.Router();

var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

/* GET users listing. */


var url = 'mongodb://localhost:27017/grabABite';
var resultArray = [];



router.post('/', function(req, res, next) {
    var address= req.body.Address;
    var date = req.body.date;
    var ordertime=req.body.otime;
    var subtotal = req.body.subtotal;
    var dfees = req.body.dfees;
    var totals =  req.body.totals;
    var fdetail = req.body.fdetail;
    var orderstatus=req.body.ostatus;     
    var oid=req.body.oid;
    var custid=req.body.custid

  mongo.connect(url, function(err, db )  {

   // db.collection.find().sort({age:-1}).limit(1) // for MAX
  //  db.collection.find().sort({age:+1}).limit(1) // for MIN



        assert.equal(null, err);
        //  var cursor = db.collection('users').insertOne({firstName:FirstName , lastName:LastName , password:Password ,email:Email, phoneNo:MobileNo , roleName:Role});
          
          db.collection("order").insertOne({fooddetails:fdetail,Date:date,orderTime:ordertime,SubTotal:subtotal,DeliveryFees:dfees,Total:totals,address:address,status:orderstatus,oID:oid,custID:custid},

          
          
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