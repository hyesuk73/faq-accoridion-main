var express = require('express')
var app = express()

app.use(express.static('assets'));

app.get('/', function (req, res) {
res.sendFile(__dirname + '/html/index.html');
})

app.listen(3000);