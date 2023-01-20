require("dotenv").config();
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DBNAME, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: "mysql"
});

(async () => { 
    try {
		await sequelize.authenticate();
		console.log("Conectado a la base de datos");
    } catch (error) {
      	console.error("Ha surgido un error al conectarse a la base de datos: ", error);
    }
})();

module.exports = sequelize;