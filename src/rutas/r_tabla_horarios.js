const express = require("express")
const router = express.Router()
const { horarioSemana, llamada1 } = require("../controladores/c_tabla_horarios")

router.get("/", horarioSemana)

router.get("/llamada", llamada1)

module.exports = router