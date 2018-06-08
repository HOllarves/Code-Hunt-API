const express = require('express'),
    AuthController = require('../controllers/AuthController'),
    config = require('../config/secret'),
    PORT = 3000

const Router = express.Router(),
  authController = new AuthController()

Router
  .post("/", authController.getUserCode)
  .get("/callback", (req, res) => { })


module.exports = Router