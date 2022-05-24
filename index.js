const express = require("express")
const app = express()

const mysql = require("mysql2")

const rutas = require("./src/router")
const cors = require("cors")

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const morgan = require("morgan")
app.use(morgan("combined"))



const db = require("./databaseConnection")

app.use("/api", rutas)

const PORT = 3000
//require('dotenv').config()
app.listen(PORT, console.log("escuchando el puerto "+PORT))