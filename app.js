var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var dbConfig = require("./config/database");
var app = express();
//var routeSiswa = require('./routes/siswa').getSiswa;

mongoose.connect(dbConfig.url);

app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

app.use('/static', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
// app.get('/', function(req, res) {
//   res.render('index', {title: "Halo"});
// });

require("./routes/siswa")(app);

app.listen(2016, () => {
  console.log('Listen to port 2016');
});
