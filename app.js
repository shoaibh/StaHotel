var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var controller = require('./controllers/controller')
app.set('view engine','ejs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('./public'));

controller(app);

app.listen(3000);
