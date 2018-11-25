var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var config = require('./config');
var index = require('./routes/index');

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.set('port', config.get('port'));
http.createServer(app).listen(app.get('port'), function () {
    console.log('Listening on ' + config.get('port'));
});

app.use(function (req, res, next) {
    console.log(req.url);
    next()
});

app.use('/', index);

// //catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// // // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });
