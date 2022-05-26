const express = require("express")
const router = express.Router()
const { horarioSemana } = require("../controladores/c_tabla_horarios")

router.get("/", horarioSemana)


module.exports = router