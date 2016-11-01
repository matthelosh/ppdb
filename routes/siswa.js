var Siswa = require("../models/siswa");
module.exports=function(app) {

  app.get("/", function(req, res){
    res.render("index", {title: "Tes PPDB"});
  })

  app.get("/siswa", function(req, res){
    Siswa.find({}, function(err, siswas){
      if (err) return res.send(err);

      res.render('siswa', {title: "Data Siswa Baru", siteName: "PPDB 2017", data: siswas});
    });
  });

  app.get("/siswa-baru", function(req, res){
    Siswa.find({}, function(err, siswas){
      if (err) return res.send(err);

      res.render("siswa-baru", {title: "Entri Data", data: siswas, siteName: "PPDB 2017"});
      // res.json(siswas);
    });
  });

  app.get("/siswa/:id", function(req, res) {
    Siswa.find({"nama": req.params.id}, function(err, siswa) {
      if(err) return res.send(err);

      res.json(siswa);
    })
  });

  app.post("/siswa", function(req, res){
    var siswa = new Siswa();
    siswa.nisn=req.body.nisn;
    siswa.nama=req.body.nama;
    siswa.nik=req.body.nik;

    console.log(req.body.nama);

    siswa.save(function(err, siswa){
      if(err) return res.send(err);

      res.redirect("/siswa");
      //res.json({"status": "ok", data :siswa});
    });
  });

  app.put("/siswa/:id", function(req, res){
    Siswa.findById(req.params.id, function(err, siswa){
      if(err) return res.send(err);

      siswa.nisn = req.body.nisn;
      siswa.nama = req.body.nama;
      siswa.nik = req.body.nik;

      siswa.save(function(err, siswa){
        if(err) return res.send(err);

        res.json({"status": "ok", data: siswa});
      });
    });
  });

  app.get("/removeSiswa/:id", function(req, res) {
    Siswa.findById(req.params.id, function(err, siswa){
      if(err) return res.send(err);

      siswa.remove(function(err){
        if(err) return res.send(err);

        res.redirect("/siswa");
      });
    });
  });
}
