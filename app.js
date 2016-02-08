var express = require('express');
var app = express();

var robots = require('./models/robots.js');

var expressLayouts = require('express-ejs-layouts');

// Application Settings
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(expressLayouts);

// Below line tells it to look in public folder for CSS 
app.use(express.static(__dirname + '/public'));


// Home Route
app.get('/', function(req, res){
  res.render('index', {welcome: "Till All Are One"})
});




app.listen('3000', function(){
  console.log('Running on Port 3000');
})