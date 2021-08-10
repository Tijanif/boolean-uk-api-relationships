var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('/users', usersRouter);

module.exports = app;