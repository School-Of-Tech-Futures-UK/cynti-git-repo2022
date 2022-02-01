// UI LOGIC

// -----------------------------DIRTY LAYER-----------------------------

// Other selectors and variables
const result = document.getElementById('result')
const displayCurrentPlayer = document.getElementById('current-player')
displayCurrentPlayer.textContent = player
displayCurrentPlayer.style.backgroundColor = 'red'
const displayCurrentPlayerName = document.getElementById('current-player-name')

// alert pop-up will prompt for player 1 name until completed
while (!player1Name) {
    player1Name = prompt('Player One (RED): Enter your name')
    }

// alert pop-up will prompt for player 2 name until completed
while (!player2Name) {
    player2Name = prompt('Player Two (YELLOW): Enter your name')
}

displayCurrentPlayerName.textContent = player1Name


// takes a turn based on user clicking a slot
function takeTurn(e) {
    const id = e.target.id   // 'row1-col1' // 'rowY-colX' 
    //console.log(`id is: ${id}`)

    const rowNum = id[3]
    const colNum = id[8]

    const lowestAvailableRow = getLowestAvailableRowInColumn(colNum, grid)
    //console.log(`Lowest available row: ${lowestAvailableRow}`)

    if (lowestAvailableRow !== null && win === false) {

        turn++

        if (player === "red") {
            grid[lowestAvailableRow][colNum - 1] = "red"
            document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = 'red';
            player = "yellow"
            displayCurrentPlayer.textContent = player
            displayCurrentPlayer.style.backgroundColor = 'yellow'
            displayCurrentPlayerName.textContent = player2Name

            if (horizontalWinner() || verticalWinner() || diagonalUpWinner() || diagonalDownWinner()) {
                win = true
                winnerPlayer = player1Name
                winnerPlayerColour = 'red'
                highscore = maxTurn - (turn + 1)
                result.textContent = `WINNER: ${winnerPlayer} (${winnerPlayerColour})`
                return alert(`${player1Name} is the Winner!`)
            }
        } else if (player === 'yellow') {
            grid[lowestAvailableRow][colNum - 1] = "yellow"
            document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = 'yellow';
            player = "red"
            displayCurrentPlayer.textContent = player
            displayCurrentPlayer.style.backgroundColor = 'red'
            displayCurrentPlayerName.textContent = player1Name

            if (horizontalWinner() || verticalWinner() || diagonalUpWinner() || diagonalDownWinner()){
                win = true
                winnerPlayer = player2Name
                winnerPlayerColour = 'yellow'
                highscore = maxTurn - (turn + 1)
                result.textContent = `WINNER: ${winnerPlayer} (${winnerPlayerColour})`
                return alert(`${player2Name} is the Winner!`)
            }

        } else if (turn === 42 && win === false) {
            console.log("it's nobody")
            player = "Nobody"
            displayCurrentPlayer.textContent = player
            displayCurrentPlayer.style.backgroundColor = 'blue'
            displayCurrentPlayerName.textContent = player
            winnerPlayer = null
            result.textContent = "No One Wins :("
            return (alert('It\'s a Tie!'))
        }
        console.log(`This is turn no: ${turn}`)
        console.log(`${win}`)

    } return null
}

// reset's game when reset button clicked
document.getElementById('reset-button').onclick = () => {
    resetGame()
    displayCurrentPlayer.textContent = null
    displayCurrentPlayer.style.backgroundColor = null
    displayCurrentPlayerName.textContent = null

    let oldGrid = document.getElementsByClassName('col')
    for (x of oldGrid) {
        x.style.backgroundColor = 'white';
        console.log('resetGame was called')
    }  
}