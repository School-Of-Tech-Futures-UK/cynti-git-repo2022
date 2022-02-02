// BUSINESS LOGIC

// -----------------------------PURE LAYER-----------------------------

// Declare gamestate
const gameState = {
    player: 'red',
    maxTurn: 42,
    turn: 0,
    winnerPlayer: '',
    winnerPlayerColour: '',
    player1Name: '',
    player2Name: '',
    gameOver: false,
    highscore: 0,
    win: null,
    grid: [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ]
  }

// Take the row and column number and update the game state and alternates player turn
function takeTurn (row, column) {
    if (gameState.gameOver === false && row !== null) {
      gameState.turn++
      gameState.grid[row][column] = gameState.player
      if (gameState.player === 'red') {
        gameState.player = 'yellow'
        return gameState.player
      } else if (gameState.player === 'yellow') {
        gameState.player = 'red'
        return gameState.player
      }
    }
  }

// find the lowest available empty slot in a column and row
function getLowestAvailableRowInColumn(columnNumber, myGrid) {
    for (let i = 5; i >= 0; i--) {
        if (myGrid[i][columnNumber - 1] === null) {
            return i
        }
    }
    return null
}

// check 4 slots in a column = winner
function verticalWinner(grid){
    for(let r = 0; r < 3; r++) {
        for (let c = 0; c < 7; c++) {
            if(
                (grid[r][c] === 'red' && grid[r+1][c] === 'red' && grid[r+2][c] === 'red' && grid[r+3][c] === 'red') ||
                (grid[r][c] === 'yellow' && grid[r+1][c] === 'yellow' && grid[r+2][c] === 'yellow' && grid[r+3][c] === 'yellow')
             ) {
                gameState.gameOver = true
                gameState.win = gameState.player
                gameState.winnerPlayer = gameState.player
                gameState.winnerPlayerColour = gameState.player
                return gameState.win
            }
        }
    }
    gameState.gameOver = false
    return null
}

// check 4 slots in a row = winner
function horizontalWinner(grid){
    for(let r = 0; r < 6; r++) {
        for (let c = 0; c < 4; c++) {
            if(
                (grid[r][c] === 'red' && grid[r][c+1] === 'red' && grid[r][c+2] === 'red' && grid[r][c+3] === 'red') ||
                (grid[r][c] === 'yellow' && grid[r][c+1] === 'yellow' && grid[r][c+2] === 'yellow' && grid[r][c+3] === 'yellow')
             ) {
                gameState.gameOver = true
                gameState.win = gameState.player
                gameState.winnerPlayer = gameState.player
                gameState.winnerPlayerColour = gameState.player
                return gameState.win
            }
        }
    }
    gameState.gameOver = false
    return null
}

// check 4 slots upward diagonal = winner
function diagonalUpWinner(grid){
    for(let r = 0; r < 3; r++) {
        for (let c = 0; c < 7; c++) {
            if(
                (grid[r][c] === 'red' && grid[r+1][c+1] === 'red' && grid[r+2][c+2] === 'red' && grid[r+3][c+3] === 'red') ||
                (grid[r][c] === 'yellow' && grid[r+1][c+1] === 'yellow' && grid[r+2][c+2] === 'yellow' && grid[r+3][c+3] === 'yellow')
             ) {
                gameState.gameOver = true
                gameState.win = gameState.player
                gameState.winnerPlayer = gameState.player
                gameState.winnerPlayerColour = gameState.player
                return gameState.win
            }
        }
    }
    gameState.gameOver = false
    return null
}

// check 4 slots downward diagonal = winner
function diagonalDownWinner(grid){
    for(let r = 0; r < 3; r++) {
        for (let c = 7; c > 2; c--) {
            if(
                (grid[r][c] === 'red' && grid[r+1][c-1] === 'red' && grid[r+2][c-2] === 'red' && grid[r+3][c-3] === 'red') ||
                (grid[r][c] === 'yellow' && grid[r+1][c-1] === 'yellow' && grid[r+2][c-2] === 'yellow' && grid[r+3][c-3] === 'yellow')
             ) {
                gameState.gameOver = true
                gameState.win = gameState.player
                gameState.winnerPlayer = gameState.player
                gameState.winnerPlayerColour = gameState.player
                return gameState.win
            }
        }
    }
    gameState.gameOver = false
    return null
}

// check for no winners (when whole board is full ie turn = 42)
function nobodyWinner() {
    if (gameState.turn === gameState.maxTurn) {
        gameState.gameOver = true
        gameState.win = 'nobody'
        gameState.winnerPlayer = 'nobody'
        gameState.winnerPlayerColour = 'blue'
        return gameState.win
      }
    gameState.gameOver = false
    return null
}

// resets gameState keys for a new game (with same player names though as last game)
  function resetGame () {
    gameState.grid = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ],
    gameState.player = 'red',
    gameState.turn = 0,
    gameState.winnerPlayer = '',
    gameState.winnerPlayerColour = '',
    gameState.gameOver = false,
    gameState.highscore = 0,
    gameState.win = null,
    console.log('resetGame was called')
  }

// Pure functions/objects to be exported for testing in separate test file
// module.exports = {
//     gameState,
//     takeTurn,
//     getLowestAvailableRowInColumn,
//     verticalWinner,
//     horizontalWinner,
//     diagonalDownWinner,
//     diagonalUpWinner,
//     nobodyWinner,
//     resetGame
// }