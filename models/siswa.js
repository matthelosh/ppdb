var mongoose = require('mongoose');
var SiswaSchema = new mongoose.Schema({
  nisn: String,
  nama: String,
  nik: String
});

var Siswa = mongoose.model("Siswa", SiswaSchema, "siswa");
module.exports = Siswa;
