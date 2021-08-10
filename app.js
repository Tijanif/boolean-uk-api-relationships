var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use('*', (req, res) => {
  res.json({ msg: 'All Okay' });
});

module.exports = app;
