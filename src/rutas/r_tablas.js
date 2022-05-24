const express = require("express")
const router = express.Router()

const {todasLasTablas} = require("../controladores/todas_tablas")

router.get("/todas", todasLasTablas)

module.exports = router