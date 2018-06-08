const config = require('../config/secret'),
    GitHub = require('github-api'),
    request = require('request'),
    queryString = require('query-string'),
    PORT = process.env.PORT || 8080

class AuthController {
    constructor() {}   
    getUserCode(req, res) {
        let payload = {
            client_id: config.github.id,
            client_secret: config.github.secret,
            code: req.body.code
        }
        request.post("https://github.com/login/oauth/access_token", {form: payload}, (err, response, body) => {
            if(err) res.json(err)
            else res.json(queryString.parse(body))
        })
    }
}

module.exports = AuthController