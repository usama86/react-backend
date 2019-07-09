var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var getuser     = require('./routes/get-user');
var city        = require('./routes/City');
var food        = require('./routes/Food');
var menu        = require('./routes/menu');
var signup = require('./routes/signup');
var checkout= require('./routes/Checkout');

var getCustomers    = require('./routes/get-customers');
var getVendors  = require('./routes/get-vendors');
var getDeliveryPersons = require('./routes/get-deliveryPersons');
var getAllUsers =  require('./routes/get-allUsers');
var Signup      = require('./routes/signup');
var getOrders   = require('./routes/get-orders');
var getCustomerOrders = require('./routes/get-customerOrders');
var AddUser = require('./routes/AddUser');
var UpdateUser = require('./routes/UpdateUser');
var DeleteUser = require('./routes/DeleteUser');
var getFood =require('./routes/get-food');
var updateFood = require('./routes/update-food');
var deleteFood = require('./routes/delete-food')





var app = express();

app.use(cors());
app.options('*', cors());



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//cors
//cors enable
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/getuser',getuser);
app.use('/city',city);
app.use('/food',food);
app.use('/menu',menu);
app.use('/signup',signup);
app.use('/Checkout',checkout);

app.use('/get-customers',getCustomers);
app.use('/get-vendors',getVendors);
app.use('/get-deliveryPersons',getDeliveryPersons);
app.use('/get-allUsers',getAllUsers);
app.use('/get-orders',getOrders);
app.use('/get-customerOrders',getCustomerOrders);
app.use('/AddUser',AddUser);
app.use('/UpdateUser',UpdateUser);
app.use('/DeleteUser',DeleteUser);
app.use('/get-food',getFood);
app.use('/update-food',updateFood);
app.use('/delete-food',deleteFood);






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
