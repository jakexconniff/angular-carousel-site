var express = require('express');
var app = express();
var path = require('path');

// Set up public folder to serve public assets
app.use(express.static(__dirname + '/public'));

// Set up route to index.html file
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.listen(8080);
console.log('Sushi on deck.');
