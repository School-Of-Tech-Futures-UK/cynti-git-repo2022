const getHighscore = async () => {
    const resp = await fetch('http://localhost:3201/highscore')
    return await resp.json()
}

getHighscore().then(
    json => json.forEach(player => {
        const listElement = document.createElement('li')
        listElement.innerHTML = `Player: ${player.name}`
        document.getElementById('highscore').appendChild(listElement)
    }
    )
)


const addPlayer = async (e) => {
    const name = document.getElementById('playername').value
    const colour = document.getElementById('colour').value
    const score = document.getElementById('score').value

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
    getHighscore(
        json => json.forEach(player => {
            const listElement = document.createElement('li')
            listElement.innerHTML = `Player: ${player.name}`
            document.getElementById('highscore').appendChild(listElement)
        }
        )
    )


}