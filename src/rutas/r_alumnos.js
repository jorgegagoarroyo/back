const  express = require("express")
const router = express.Router()

const {todosAlumnos, crearAlumno, borrarAlumno} = require("../controladores/c_alumnos")

router.get("/", todosAlumnos)

router.post("/", crearAlumno)

router.delete("/", borrarAlumno)

module.exports = router