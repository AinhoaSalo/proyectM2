const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

router.get("/", function (req, res) {
  let db = req.app.locals.db;
  let userName = req.body.nameUserLogin;

  db.collection("register")
  .find({ nameUserRegister: userName })
  .toArray(function (err, arrayuser) {
    if (err !== undefined) {
      res.send({ mensaje: "Algo no ha salido bien" });
    } else {
      res.send({ message: "todo ok" })
    }
  });

});

module.exports = router;