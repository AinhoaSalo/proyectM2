const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  let db = req.app.locals.db;
  db.collection("monument")
  .find()
  .toArray(function (err, result) {
    if (err != undefined) {
      console.log(err);
    } else {
      if (result.length > 0) {
        let arrayMonuments = [];
        result.forEach((monuments) => {
            arrayMonuments.push(monuments);
        });
        res.send(arrayMonuments);
      }
      
    }
  });

});

module.exports = router;