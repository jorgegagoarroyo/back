const  express = require("express")
const router = express.Router()

const {todosAlumnos, crearAlumno} = require("../controladores/c_alumnos")

router.get("/", todosAlumnos)

router.post("/", crearAlumno)

module.exports = router