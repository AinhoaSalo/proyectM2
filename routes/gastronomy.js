const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  let db = req.app.locals.db;
  db.collection("gastronomy")
  .find()
  .toArray(function (err, result) {
    if (err != undefined) {
      console.log(err);
    } else {
      if (result.length > 0) {
        let arraygastronomy = [];
        result.forEach((gastronomy) => {
          arraygastronomy.push(gastronomy);
        });
        res.send(arraygastronomy);
      }
      
    }
  });

});

module.exports = router;