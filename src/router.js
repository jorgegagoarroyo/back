const express = require("express")
const router = express.Router()
const rutaTablas = require("./rutas/r_tablas")
const rutaAlumnos = require("./rutas/r_alumnos")
const tablaHorarios = require("./rutas/r_tabla_horarios")

router.use("/tablas", rutaTablas)

router.use("/alumnos", rutaAlumnos)

router.use("/tabla/horarios", tablaHorarios)

module.exports = router