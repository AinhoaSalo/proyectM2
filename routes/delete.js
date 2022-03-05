const express = require("express");
const router = express.Router();

router.delete("/", function (req, res) {
  let db = req.app.locals.db;
  let userName = req.body.nameUserLogin;

  db.collection("register")
  .deleteOne({ nameUserRegister: userName}, function(err, obj){
    if (err !== undefined) {
      res.send({ delete: false, message: "Algo no ha salido bien" });
    } else {
      res.send({ delete: true, message: "Usuario borrado" });
    }
  
  });

});

module.exports = router;
