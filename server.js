const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const controllerRoutes = require("./controller")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", controllerRoutes)
    
app.listen(3000)

