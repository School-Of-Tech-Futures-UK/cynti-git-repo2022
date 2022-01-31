const getHighscore = async () => {
    const resp = await fetch('http://localhost:3201/highscore')
    return await resp.json()
}

const updateHighscore = async (e) => {
    const name = winnerPlayer
    const colour = winnerPlayerColour
    const score = highscore

    const player = JSON.stringify(
        {
            name: name,
            colour: colour,
            score: Number(score)
        }
    )

    await fetch('http://localhost:3201/highscore', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: player
    })

    document.getElementById('highscore').innerHTML = ''

    getHighscore().then(
        json => json.forEach(player => {
            const listItem = document.createElement('li')
            listItem.innerHTML = `Player: ${player.name}, Colour: ${player.colour}, Highscore: ${player.score}`
            document.getElementById('highscore').appendChild(listItem)
        }
        )
    )
}