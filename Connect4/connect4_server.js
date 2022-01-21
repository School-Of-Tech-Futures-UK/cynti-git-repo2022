const express = require('express')
const server = express()
server.use(express.json())
var cors = require('cors')
forapi.use(cors())

server.post('/highscore', (req, res) => {
    const sum = req.body.number[0] + req.body.number[1]
    if (!isNaN(sum)) {
        res.send(`The sum of numbers = ${sum}`)
    } else {
        res.send(`That's not a valid number`)
        res.status(404)
    }
})
 
server.listen(3101)

