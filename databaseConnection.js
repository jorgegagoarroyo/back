require('dotenv').config()

const mysql = require('mysql2');
var connection;
// create the connection to database

console.log(process.env.DBHOST);
try {
    connection = mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DBNAME,
    });
    console.log('conectado a db');
    //connection.query("SELECT * FROM alumnos", 
    // (error, results) => {
    //     if(error)
    //         throw error;
    //     //response.status(200).json(results);
    //     console.log(results);
    //     //console.log(fields);
    // });
} catch (error) {
    console.log("Error al conectar con la base de datos");
}

module.exports = connection