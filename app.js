require('dotenv').config();

const createError = require('http-errors');
const express = require('express');

const bodyParser = require("body-parser");
const logger = require('morgan');

const routes = require("./routes");

const app = express();

//app.use(passport.initialize());
//app.use(`/api/v${API_VERSION}`, routes);

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(`/api/`, routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
