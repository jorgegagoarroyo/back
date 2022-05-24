const express = require("express")
const router = express.Router()
const rutaTablas = require("./rutas/r_tablas")
const rutaAlumnos = require("./rutas/r_alumnos")


router.use("/tablas", rutaTablas)

router.use("/alumnos", rutaAlumnos)

module.exports = router