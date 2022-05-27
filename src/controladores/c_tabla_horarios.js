const connect = require("../../databaseConnection")

module.exports = {

    horarioSemana : (req, res)=>{
        var buscar = {
            ref:"ref", 
            aula:"tabla_aulas.nombre",
            semana: "tabla_semanas.nombre",
            fecha : "tabla_fechas.fecha",
            clase: "tabla_clases.nombre", 
            profesor: "tabla_profesores.codigo"
        }
        let valores = req.body
        for(let i in valores){
            if(valores[i] != ""){
                buscar[i] = `"${valores[i]}"`
            }
        }
        console.log(buscar)

        connect.query(`SELECT tabla_fechas.fecha, tabla_semanas.nombre AS semana, tabla_clases.nombre AS clase,  tabla_horas.ref AS hora, tabla_aulas.nombre AS aula, tabla_profesores.codigo AS profesor FROM tabla_semanas ,tabla_clases, tabla_fechas, tabla_horas, tabla_aulas, tabla_profesores WHERE   tabla_horas.ref = ${buscar.ref} AND tabla_aulas.nombre = ${buscar.aula} AND tabla_semanas.nombre=${buscar.semana} AND tabla_fechas.fecha=${buscar.fecha} AND tabla_clases.nombre=${buscar.clase} AND tabla_profesores.codigo = ${buscar.profesor}`, (err, resul)=>{
            if(err){
                res.json(err)
            }else{
                res.json(resul)
            }
        })
    }
}