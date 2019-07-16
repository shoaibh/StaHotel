var express = require('express');
var app = express();
var controller = require('./controllers/controller')
app.set('view engine','ejs');

app.use(express.static('./public'));

controller(app);

app.listen(3000);

console.log('hello');