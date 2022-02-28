const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
  
router.post("/", function (req, res) {
  let db = req.app.locals.db;
  let userName = req.body.nameUserLogin;
  let password = req.body.passwordUserLogin;

  db.collection("register")
  .find({ nameUserRegister: userName })
  .toArray(function (err, arrayuser) {
    if (err !== undefined) {
      res.send({ mensaje: "Algo no ha salido bien" });
    } else {
      if (arrayuser.length > 0) {
        if (bcrypt.compareSync(password, arrayuser[0].passwordUserRegister)) {
          res.send({ mensaje: "Todo guay las contraseñas coinciden" });
        } else {
          res.send({ mensaje: "contraseña incorrecta" });
        }
      } else {
        res.send({ mensaje: "registrate por favor que no estás" });
      }
    }
  });

});

module.exports = router;