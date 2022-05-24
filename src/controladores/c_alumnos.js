const res = require("express/lib/response")
const connect = require("../../databaseConnection")

module.exports= {

    todosAlumnos: (req, res)=>{
        var buscar = {
            id:"*",
            dni:"*", 
            imagen:"*", 
            nombre:"*", 
            apellido1:"*", 
            apellido2:"*"
        }
        //var datos = req.body.datos
        connect.query(`SELECT * FROM tabla_alumnos  `, (err, resul)=>{
            if(err){
                console.log("error en todosAlumnos: "+err)
                res.json({error: err})
            }else{
                res.json(resul)
            }
        })
    },

    crearAlumno: (req, res)=>{
        var datos = {
            dni: req.body.dni, 
            imagen: req.body.imagen, 
            nombre: req.body.nombre, 
            apellido1: req.body.apellido1, 
            apellido2: req.body.apellido2
        }
        connect.query(`INSERT INTO tabla_alumnos (dni, imagen, nombre, apellido1, apellido2) VALUES ("${datos.dni}", "${datos.imagen}", "${datos.nombre}", "${datos.apellido1}", "${datos.apellido2}")`, (err, resul)=>{
            if(err){
                res.json({error : err})
            }else{
                res.json(resul)
            }
        })
    }

}



// `SELECT id, dni, imagen, nombre, apellido1, apellido2 FROM tabla_alumnos WHERE id='${buscar.id}' AND dni='${buscar.dni}' AND imagen='${buscar.imagen}' AND nombre='${buscar.nombre}' AND apellido1='${buscar.apellido1}' AND apellido2='${buscar.apellido2}'`