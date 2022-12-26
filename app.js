var express = require('express');
var app = express();

// set the view engine to ejs
app.use(express.static('views'));
app.use(express.static('assets'));

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('index.ejs');
});

// about page
app.get('/blaster001', function(req, res) {
  res.render('WA_blaster_whacenter.ejs');
});

app.listen(8080);
console.log('Server is listening on port 8080');