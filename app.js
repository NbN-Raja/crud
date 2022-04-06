var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const ejs = require('ejs');
const mongoose = require('mongoose');
const User = require("./model/usersSchema")

const db = require("./model/db");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
var fetchRouter = require('./routes/fetchdata');
var updateRouter = require('./routes/update');
var userdetail = require('./api/userdetail');
const port = 3000
var app = express();

// middleware

app.set("/middleware"),(req,res,next)=>{

  const mmiddle= req.body.email;
  if(!nmiddle){
    res.redirect("home")
  }else{
    res.redirect("about")
  }
  next();
}


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/register', registerRouter);
app.post('/register', registerRouter);
app.post('/update/:id', updateRouter);
app.use('/login', loginRouter);
app.post('/login', loginRouter);
app.use('/fetch', fetchRouter);
app.use('/userdetailapi', userdetail);



// update here 
app.get('/update/:id', (req,res)=>{

User.find({_id:req.params.id},req.body.email,{new:true},(err,users)=>{
  if (err) {
    console.log("erroe");
  }else{
    res.render('update', {
      update: users
  });
  }
})

  
})

app.post('/updates/:id', (req,res)=>{

User.updateOne({_id:req.params.id},req.body,{new:true},(err,users)=>{
  if (err) {
    console.log("erroe");
  }else{
    res.send("updated")
  }
})

  
})


app.get('/delete/:id', (req,res)=>{

User.deleteMany({_id:req.params.id},{new:true},(err,users)=>{
  if (err) {
    console.log("erroe");
  }else{
    res.send("deleted")
  }
})

  
})









// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
const process = require('process');
const users = require('./model/usersSchema');
  
// Intentionally emitted warning
process.emitWarning('Running out of Storage');
  
// Event 'warning' 
process.on('warning', (warning) => {
  console.warn("warning stacktrace - " + warning.stack)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


module.exports = app;
