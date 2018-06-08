const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('./config/secret'),
    authRouter = require('./routers/auth-router'),
    PORT = process.env.PORT || 8080

// Starting up express
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use("/auth/github", authRouter)

// Starting webserver
app.listen(PORT)
console.log("Server running on port: ", PORT)