const express = require("express");
const mongodb = require("mongodb");
const app = express();
const register = require("./routes/register");
const login = require("./routes/login");
const dataUser = require("./routes/pageWithUserData");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

let MongoClient = mongodb.MongoClient;

//conexion mongo
MongoClient.connect("mongodb://127.0.0.1:27017", function (error, client) {
  if (error !== undefined) {
    console.log(error);
  } else {
    app.locals.db = client.db("zaragoza");
  }
});

app.use("/registro", register);
app.use("/conectar", login);
app.use("/areapersonal", dataUser);

// por los hosting, si encuentras un puerto PORT LEVANTA LA APP EN ESE PUERTO SI NO USA EL 3000.
app.listen(3000 || process.env.PORT);