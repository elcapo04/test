//  OpenShift sample Node application
var express = require('express'),
    app     = express(),
    morgan  = require('morgan');
const path = require('path');
    
Object.assign=require('object-assign')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

const person = [];
const reason = [];


app.get('/', function (req, res) {
  res.render('./person/person', {
      person: person,
      reason: reason
  });
});

app.listen(port, ip);

module.exports = app ;
