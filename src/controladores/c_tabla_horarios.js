const connect = require("../../databaseConnection")

module.exports = {

    horarioSemana : (req, res)=>{
        connect.query("SELECT tabla_semanas.nombre AS semana, tabla_clases.nombre AS clase, tabla_fechas.fecha, tabla_horas.ref AS hora, tabla_aulas.nombre AS aula, `tabla profesores`.codigo AS profesor FROM tabla_semanas ,tabla_clases, tabla_fechas, tabla_horas, tabla_aulas, `tabla profesores`", (err, resul)=>{
            if(err){
                res.json(err)
            }else{
                res.json(resul)
            }
        })
    }
}