var express = require('express')
var app = express()
var open = require("open");

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
})

app.use('/vendor', express.static('vendor'));

app.listen(4751, function () {
  console.log('Tilenames editor v1.0.0')
  //open("http://localhost:4751/");
});