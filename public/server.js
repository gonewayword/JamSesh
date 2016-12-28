var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'exteded':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

app.listen(8080);
console.log('App listening on port 8080');

app.get('/', function(req, res) {
  res.sendfile('index.html');
});
app.get('*.js', function(req, res) {
  res.sendfile('./' + req.url);
});
