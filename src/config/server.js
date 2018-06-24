const express = require('express');
const  path = require('path');
const bodyParser = require('body-parser')


const app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.set('port', port);
app.set('ip', ip);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../app/views'));


app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;
