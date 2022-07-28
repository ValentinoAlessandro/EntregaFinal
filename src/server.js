//Dependencias
const express = require("express");
//const cors = require("cors");

//Express App
const app = express();
const PORT = 4000;

//Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(cors());

function logger(req, res, next) {
  console.log("Request received");
  next();
}

app.use(logger);

/*
app.post("/createUser", (req, res) => {
  let usuario = req.body.username;
  let password = req.body.password;

  console.log(`El usuario a crear es: ${usuario}`);
  console.log(`La contraseña a crear es: ${password}`);

  //console.log(req.body);
  res.send("Usuario creado correctamente");
});

app.get("/user/:userId", (req, res) => {
  let id = req.params.userId;
  //Query a la BD por ese ID
  res.send(`Getting info for user: ${id}`);
});

app.post("/user/.user", (req, res) => {
  console.log(`Actualizando info del user ${req.params.user}`);
  //Query a la BD por ese ID
  res.send("Post request");
});

app.put("/contact", (req, res) => {
  res.send("PUT REQUEST");
});

app.delete("/delete", (req, res) => {
  res.send("DELETE REQUEST");
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
*/

//Datos
var estudiantes = [
  {
    ocupacion: "Estudiante",
    nombre: "Javier Villa",
    carrera: "ITC",
    contacto: "A01242469@itesm.mx",
    routeName: "javierVilla",
  },
  {
    ocupacion: "Estudiante",
    nombre: "Nadia Chacon",
    carrera: "IDS",
    contacto: "A01242466@itesm.mx",
    routeName: "nadiaChacon",
  },
];

//Ruta basica
app.get("/", function (req, res) {
  res.send("Test");
});

//Info de todos los estudiantes
app.get("/api/estudiantes", function (req, res) {
  return res.json(estudiantes);
});

//Infro de un solo estudiante o false
app.get("/api/estudiantes/:estudiante", function (req, res) {
  var chosen = req.params.estudiante;

  console.log(chosen);

  for (var i = 0; i < estudiantes.length; i++) {
    if (chosen === estudiantes[i].routeName) {
      return res.json(estudiantes[i]);
    }
  }

  return res.json(false);
});

// Crear nuevos estudiantes con JSON input
app.post("/api/estudiantes", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var nuevoEstudiante = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  nuevoEstudiante.routeName = nuevoEstudiante.name
    .replace(/\s+/g, "")
    .toLowerCase();

  console.log(nuevoEstudiante);

  estudiantes.push(nuevoEstudiante);

  res.json(nuevoEstudiante);
});

// Inicia el server en el puerto 4000
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
