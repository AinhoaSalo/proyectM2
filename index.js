const express = require("express");
const mongodb = require("mongodb");
const app = express();
const register = require("./routes/register");
const login = require("./routes/login");
const dataUser = require("./routes/pageWithUserData");
const deleteUser = require("./routes/delete");
const putUser = require("./routes/put");
const gastronomy = require("./routes/gastronomy");
const monuments = require("./routes/monuments");

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

//indicar en que ruta se encuentra
app.use("/registro", register);
app.use("/conectar", login);
app.use("/areapersonal", dataUser);
app.use("/delete", deleteUser);
app.use("/put", putUser);
app.use("/gastronomy", gastronomy);
app.use("/monuments", monuments);

// por los hosting, si encuentras un puerto PORT LEVANTA LA APP EN ESE PUERTO SI NO USA EL 3000.
app.listen(3000 || process.env.PORT);