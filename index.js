const express = require("express");
const mongodb = require("mongodb");
const app = express();
const register = require("./routes/register");
const login = require("./routes/login");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(express.json());

let MongoClient = mongodb.MongoClient;

//conexion mongo
MongoClient.connect("mongodb+srv://AinhoaSalo:S8RR1i3Psw5P5ggt@zaragoza.bjkqt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", function (error, client) {
  if (error !== undefined) {
    console.log(error);
  } else {
    app.locals.db = client.db("zaragoza");
  }
});

app.use("/registro", register);
app.use("/conectar", login);

// por los hosting, si encuentras un puerto PORT LEVANTA LA APP EN ESE PUERTO SI NO USA EL 3000.
app.listen(3000 || process.env.PORT);