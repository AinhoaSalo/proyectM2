const express = require("express");
const router = express.Router();
  
router.post("/", function (req, res) {
  let db = req.app.locals.db;
  db.collection("register").insertOne(req.body, function (err, result) {
    if (err != undefined) {
      if (err.code == 11000){
        res.send({ message: "El usuario ya existe" })
      } else {
        console.log("algo ha salido mal, vuelta a intentarlo en unos minutos");
      }
    } else {
      res.send({ message: "registrado correctamente" });
    }
  });

});

module.exports = router;