const fs = require('fs').promises
const express = require('express')
const server = express()
server.use(express.json())

var cors = require('cors')
server.use(cors())

let player

async function loadPlayers () {
    const contents = await fs.readFile('./highscores.json', 'utf-8')
    const data = JSON.parse(contents)
    player = data
  }
  
  async function savePlayers (player) {
    const contents = JSON.stringify(player)
    await fs.writeFile('./highscores.json', contents)
  }

server.get('/highscore', (req, res) => {
    res.json(player.slice(0, 10))
})

loadPlayers()

server.post('/highscore', (req, res) => {
    const data = req.body
    player.push(data)
    player.sort((a, b) => {
        return b.player - a.player
    })
    savePlayers(player)
    // console.log(req)  
    res.status(200)
    res.send('Server is working')
})

server.listen(3201)