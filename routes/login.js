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
      res.send({ mensaje: "Error, algo no va bien." });
    } else {
      if (arrayuser.length > 0) {
        if (bcrypt.compareSync(password, arrayuser[0].passwordUserRegister)) {
          res.send({ login: true });
        } else {
          res.send({ login: false, message: "Contraseña incorrecta." });
        }
      } else {
        res.send({ login: false, message: "Usuario no registrado." });
      }
    }
  });

});

module.exports = router;