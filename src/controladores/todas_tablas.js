const connect = require("../../databaseConnection")

module.exports = {

    todasLasTablas:  (req, res)=>{
        // console.log("connect")
        // try{
        //     var tablas = connect.query("SELECT * FROM tabla_alumnos", (err, resul));
        //     //var tablas = connect.query("SHOW TABLES");
        //     //var tablas = connect.query("INSERT INTO tabla_alumnos (dni, imagen, nombre, apellido1, apellido2) VALUES ('dni_1', 'alumno1.png', 'alumno1', 'apellido1', 'apellido2') ");
        //     console.log(tablas);
        //     res.json(tablas);
        // }catch(err){
        //     res.json({error: err});
        // }

        connect.query("SHOW TABLES", (err, resul)=>{
            if (err){ 
                console.log(err)
                res.json({error: err})
            }else{
                res.json(resul)
            }
        })
    }
}