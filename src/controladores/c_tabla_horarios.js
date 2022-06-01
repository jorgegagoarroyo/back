const connect = require("../../databaseConnection")

module.exports = {

    horarioSemana : (req, res)=>{
        connect.query(`SELECT
                tabla_horas.ref AS hora,
                tabla_modulos.nombre AS modulo,
                tabla_aulas.nombre AS aula,
                tabla_uf.nombre AS uf,
                tabla_fechas.fecha AS fecha,
                tabla_profesores.codigo AS profesor,
                tabla_profesores.nombre AS profesor_nombre,
                tabla_profesores.apellido1 AS profesor_apellido

            FROM 
                tabla_r_horarios INNER JOIN tabla_horas ON id_hora = tabla_horas.id
                INNER JOIN tabla_modulos ON id_modulo = tabla_modulos.id
                INNER JOIN tabla_aulas ON id_aula = tabla_aulas.id
                INNER JOIN tabla_uf ON id_uf = tabla_uf.id 
                INNER JOIN tabla_fechas ON id_fechas = tabla_fechas.id
                INNER JOIN tabla_profesores ON id_profesor = tabla_profesores.id
                `, (err, resul)=>{
            if(err){
                res.json(err)
            }else{
                res.json(resul)
            }
        })
    },

    llamada1 : async (req, res)=>{
        let buscar = {
            hora : "id_hora"
        }

        await connect.execute(' SELECT * FROM tabla_r_horarios WHERE id_hora = ? ;',
        ["id_hora"],
        (err, resul)=>{
            if(err){
                res.json(err)
            }else{
                res.json(resul)
            }
        })
    }
}




// SELECT 
// ref,
// codigo,
// tabla_aulas.nombre
// FROM 
// tabla_r_horarios RIGHT JOIN tabla_horas ON tabla_r_horarios.id_hora 
// 	INNER JOIN tabla_profesores ON tabla_r_horarios.id_profesor = tabla_profesores.id
//     INNER JOIN tabla_aulas ON tabla_r_horarios.id_aula = tabla_aulas.id

// ;



//2º
// SELECT 
//         *
//         FROM 
//         tabla_r_horarios RIGHT JOIN tabla_horas ON tabla_r_horarios.id_hora = tabla_horas.id
//             INNER JOIN tabla_profesores ON tabla_r_horarios.id_profesor = tabla_profesores.id 
        
//         ;



// // primeraº horario semana
// (req, res)=>{
//     var buscar = {
//         ref:"ref", 
//         aula:"tabla_aulas.nombre",
//         semana: "tabla_semanas.nombre",
//         fecha : "tabla_fechas.fecha",
//         clase: "tabla_clases.nombre", 
//         profesor: "tabla_profesores.codigo"
//     }
//     let valores = req.body
//     for(let i in valores){
//         if(valores[i] != ""){
//             buscar[i] = `"${valores[i]}"`
//         }
//     }
//     console.log(buscar)

//     connect.query(`SELECT
//             tabla_fechas.fecha, tabla_semanas.nombre AS semana, tabla_clases.nombre AS clase,  tabla_horas.ref AS hora, tabla_aulas.nombre AS aula, tabla_profesores.codigo AS profesor 
//         FROM 
//             tabla_semanas ,tabla_clases, tabla_fechas, tabla_horas, tabla_aulas, tabla_profesores 
//         WHERE 
//             tabla_horas.ref = ${buscar.ref} AND tabla_aulas.nombre = ${buscar.aula} AND tabla_semanas.nombre=${buscar.semana} AND tabla_fechas.fecha=${buscar.fecha} AND tabla_clases.nombre=${buscar.clase} AND tabla_profesores.codigo = ${buscar.profesor}`, (err, resul)=>{
//         if(err){
//             res.json(err)
//         }else{
//             res.json(resul)
//         }
//     })
// }