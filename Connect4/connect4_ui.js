// UI LOGIC

// const { gameState, takeTurn,
//   getLowestAvailableRowInColumn,
//   verticalWinner,
//   horizontalWinner,
//   diagonalDownWinner,
//   diagonalUpWinner,
//   nobodyWinner,
//   resetGame } = require('./connect4_code');

// -----------------------------DIRTY LAYER-----------------------------

// Declare HTML selectors and store as variables
const displayCurrentPlayerColour = document.getElementById('current-player-colour')
displayCurrentPlayerColour.textContent = ''
displayCurrentPlayerColour.style.backgroundColor = ''

const displayCurrentPlayerName = document.getElementById('current-player-name')
displayCurrentPlayerName.textContent = ''

const result = document.getElementById('result')
result.textContent = ''


// alert pop-up will prompt for players' names until completed
while (!gameState.player1Name) {
    gameState.player1Name = prompt('Player One (RED): Enter your name')
    }

while (!gameState.player2Name) {
    gameState.player2Name = prompt('Player Two (YELLOW): Enter your name')
}
// initialise first player as red and player 1 name on screen
displayCurrentPlayerName.textContent = gameState.player1Name
displayCurrentPlayerColour.textContent = 'red'
displayCurrentPlayerColour.style.backgroundColor = 'red'


// takes a turn based on user clicking a slot and returns a winner if won
function playerClick(e) {
    const id = e.target.id // 'row1-col1' ie 'rowY-colX' 
    const colNum = Number.parseInt(id[8])
    const lowestAvailableRow = getLowestAvailableRowInColumn(colNum, gameState.grid)
    document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = gameState.player
    takeTurn(lowestAvailableRow, colNum)
    console.log(`lowest row:${lowestAvailableRow} & column:${colNum}`)

    // alternate player name + colour + slot colour per click on grid
    displayCurrentPlayerName.textContent = gameState.player === 'red' ? gameState.player1Name : gameState.player2Name

    displayCurrentPlayerColour.textContent = gameState.player === 'red' ? gameState.player : 'yellow'

    displayCurrentPlayerColour.style.backgroundColor = gameState.player === 'red' ? gameState.player : 'yellow'

    console.log(displayCurrentPlayerColour)
    console.log(displayCurrentPlayerName)
    


    // checks winner functions and returns a winner
    const winner = (verticalWinner(gameState.grid) || horizontalWinner(gameState.grid) || diagonalDownWinner(gameState.grid) || diagonalUpWinner(gameState.grid) || nobodyWinner(gameState.grid))
   
    if (winner !== null) {
      gameState.winnerPlayerColour = winner
      if (winner === 'red') {
        gameState.winnerPlayer = gameState.player1Name
        result.textContent = `WINNER: ${gameState.winnerPlayer} (${gameState.winnerPlayerColour})`
        result.style.backgroundColor = gameState.winnerPlayerColour
        updateHighscore().then(getHighscore)
        alert(`${gameState.player1Name} is the Winner!`)

      } else if (winner === 'yellow') {
        gameState.winnerPlayer = gameState.player2Name
        result.textContent = `WINNER: ${gameState.winnerPlayer} (${gameState.winnerPlayerColour})`
        result.style.backgroundColor = gameState.winnerPlayerColour
        updateHighscore().then(getHighscore)
        alert(`${gameState.player2Name} is the Winner!`)

      } else if (winner === 'nobody') {
        gameState.winnerPlayer = 'nobody'
        result.textContent = `IT'S A TIE: ${gameState.winnerPlayer} won :()`
        result.style.backgroundColor = 'blue'
        getHighscore()
        alert(`It\s a tie!`)
      }
    }
    console.log(`This is turn no: ${gameState.turn}`)
    console.log(gameState.grid)
    console.log(`highest score: ${gameState.highscore}`)
}


// clears board and reset's game when "start again" button clicked
function resetBoard (e) {
      resetGame()
      displayCurrentPlayerColour.textContent = gameState.player
      displayCurrentPlayerColour.style.backgroundColor = gameState.player
      displayCurrentPlayerName.textContent = gameState.player1Name
      result.textContent = ''
      result.style.backgroundColor = ''

      let clearedGrid = document.getElementsByClassName('col')
      for (x of clearedGrid) {
          x.style.backgroundColor = 'white';
          console.log('resetGame was called')
      }  
  } 






    //------------------OLD TAKETURN FUNCTION----------------
    // if (lowestAvailableRow !== null && win === false) {

    //     turn++

    //     if (player === "red") {
    //         grid[lowestAvailableRow][colNum - 1] = "red"
    //         document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = 'red';
    //         player = "yellow"
    //         displayCurrentPlayerColour.textContent = player
    //         displayCurrentPlayerColour.style.backgroundColor = 'yellow'
    //         displayCurrentPlayerName.textContent = player2Name

    //         if (horizontalWinner() || verticalWinner() || diagonalUpWinner() || diagonalDownWinner()) {
    //             win = true
    //             winnerPlayer = player1Name
    //             winnerPlayerColour = 'red'
    //             highscore = maxTurn - (turn + 1)
    //             result.textContent = `WINNER: ${winnerPlayer} (${winnerPlayerColour})`
    //             return alert(`${player1Name} is the Winner!`)
    //         }
    //     } else if (player === 'yellow') {
    //         grid[lowestAvailableRow][colNum - 1] = "yellow"
    //         document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = 'yellow';
    //         player = "red"
    //         displayCurrentPlayerColour.textContent = player
    //         displayCurrentPlayerColour.style.backgroundColor = 'red'
    //         displayCurrentPlayerName.textContent = player1Name

    //         if (horizontalWinner() || verticalWinner() || diagonalUpWinner() || diagonalDownWinner()){
    //             win = true
    //             winnerPlayer = player2Name
    //             winnerPlayerColour = 'yellow'
    //             highscore = maxTurn - (turn + 1)
    //             result.textContent = `WINNER: ${winnerPlayer} (${winnerPlayerColour})`
    //             return alert(`${player2Name} is the Winner!`)
    //         }

    //     } else if (turn === 42 && win === false) {
    //         console.log("it's nobody")
    //         player = "Nobody"
    //         displayCurrentPlayerColour.textContent = player
    //         displayCurrentPlayerColour.style.backgroundColor = 'blue'
    //         displayCurrentPlayerName.textContent = player
    //         winnerPlayer = null
    //         result.textContent = "No One Wins :("
    //         return (alert('It\'s a Tie!'))
    //     }
    //     console.log(`This is turn no: ${turn}`)
    //     console.log(`${win}`)

    // } return null