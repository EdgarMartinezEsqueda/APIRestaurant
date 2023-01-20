const express = require("express");

let app = express();

//settings
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use( "/api/restaurantes/", require("./routes/restaurantes"));   // routes for CRUD operations in the DB
app.use( "/restaurants/statistics", require("./routes/statistics"));   // for second task, return statistics of the restaurants in certain area

app.listen( process.env.PORT || 3000, () => {
    require("./database/database");   // Connect to database
    console.log("Servidor iniciado en el puerto: " + app.get("port"));
});
