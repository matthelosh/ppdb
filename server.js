var express = require('express');
//var path = require('path');
var app = express();
var favicon = require('serve-favicon');
var loggger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var db = require('./models/db');
//var routes = require('./routes/index');
//var users = require('./routes/users');
//var siswa = require('./routes/siswa');
var Siswa = require("./models/siswa");
var mongoose = require("mongoose");
//var config = require("./models/db");

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use('/static', express.static(__dirname + '/public'));


app.get('/', (req, res) => {
	res.render('index', {title: 'PPDB', siteName: 'SMKN 10 Malang'});
});

app.get('/siswa', (req, res) => {
	res.render('siswa', {title: 'Entri Data'});
})
app.post('/siswa', (req, res) => {
	var newSiswa = new Siswa({
		
		nama : req.body.nama,
		nik : req.body.nik
	});

	newSiswa.save(function(err){
		if (err) throw res.send(err);

		res.send('sukses');
	})
});

app.listen(2016, () => {
	console.log('listen 2016');
	});
