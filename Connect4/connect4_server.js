const express = require('express')
const server = express()
server.use(express.json())

var cors = require('cors')
server.use(cors())

const player = []

server.get('/highscore', (req, res) => {
    res.json(player)
})

server.post('/highscore', (req, res) => {
    player.push(req.body)
    console.log(req)  
    res.status(200)
    res.send('Cheers')
})

server.listen(3201)