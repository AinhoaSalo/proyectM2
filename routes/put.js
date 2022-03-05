const express = require("express");
const router = express.Router();

router.put("/", function (req, res) {
  let db = req.app.locals.db;
  let userNameLogin = req.body.nameUserRegister;
  let userName = req.body.nameRegister;
  let userLastname = req.body.lastnameRegister;

  db.collection("register")
  .updateOne({nameUserRegister: userNameLogin},{ $set: { nameRegister: userName,lastnameRegister: userLastname}}, function(err, obj) {
    if (err !== undefined) {
      res.send({ put: false, message: "Algo no ha salido bien" });
    } else {
      res.send({ put: true, message: "Datos del usuario modificados" });
    }
  })
});

module.exports = router;