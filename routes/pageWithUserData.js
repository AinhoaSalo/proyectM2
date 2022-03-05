const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  let db = req.app.locals.db;
  let userName = req.query.nameUserLogin;
  db.collection("register")
  .find({ nameUserRegister: userName })
  .toArray(function (err, arrayuser) {
    if (err !== undefined) {
      res.send({ mensaje: "Algo no ha salido bien" });
    } else {
      if (arrayuser.length > 0) {
        res.send({ nameRegister: arrayuser[0].nameRegister, lastnameRegister: arrayuser[0].lastnameRegister})
      } else {

      }
    }
  });

});

module.exports = router;