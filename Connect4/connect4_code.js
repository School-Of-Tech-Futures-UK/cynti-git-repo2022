// Bugs to fix:
// 1) verticalWinner() doesn't work if win starts from bottom row
// 2) Nobody winner not declaring yet
// 3) playername doesnt reset to blank prompt alert


// Declare selectors and variables
let player = "red"
let player1Name
let player2Name
let win = false
let winnerPlayer
let winnerPlayerColour
let turn = 0
let highscore = 0
let maxTurn = 42

const result = document.getElementById('result')
const row = document.getElementsByClassName('row')

const displayCurrentPlayer = document.getElementById('current-player')
displayCurrentPlayer.textContent = player
displayCurrentPlayer.style.backgroundColor = 'red'

const displayCurrentPlayerName = document.getElementById('current-player-name')

// alert pop-up will prompt for player 1 name until completed
while (!player1Name) {
    player1Name = prompt('Player One (RED): Enter your name')
    }

displayCurrentPlayerName.textContent = player1Name
console.log(`Player 1 is ${player1Name}`)

// alert pop-up will prompt for player 2 name until completed
while (!player2Name) {
    player2Name = prompt('Player Two (YELLOW): Enter your name')
}
console.log(`Player 2 is ${player2Name}`)


let grid = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]

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
                return alert(`${player2Name} is the Winner!`)
            }

        } else if (turn === 42) {
            player = "Nobody"
            displayCurrentPlayer.textContent = player
            displayCurrentPlayer.style.backgroundColor = 'blue'
            displayCurrentPlayerName.textContent = player
            winnerPlayer = null
            return (alert('It\'s a Tie!'))
        } else {
            return null
        }
    }

    console.log(`This is turn no: ${turn}`)
}

// find the lowest available empty slot in a column and row
function getLowestAvailableRowInColumn(columnNumber, myGrid) {
    for (let i = 5; i >= 0; i--) {
        if (myGrid[i][columnNumber - 1] === null) {
            return i
        }
    }

    return null;
}

// reset's game when reset button clicked
document.getElementById('reset-button').onclick = () => {
        grid = [
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null]
        ]
        player = 'red'
        win = false
        displayCurrentPlayer.textContent = player
        displayCurrentPlayer.style.backgroundColor = 'red'

        displayCurrentPlayerName.textContent = null

        let oldGrid = document.getElementsByClassName('col')
        for (x of oldGrid) {
            x.style.backgroundColor = 'white';
            console.log('resetGame was called')
        }  
    }

// check 4 slots in a row = winner
function horizontalWinner(){
    for(let r = 0; r < 6; r++) {
        for (let c = 0; c < 4; c++) {
            if(
                (grid[r][c] === 'red' && grid[r][c+1] === 'red' && grid[r][c+2] === 'red' && grid[r][c+3] === 'red') ||
                (grid[r][c] === 'yellow' && grid[r][c+1] === 'yellow' && grid[r][c+2] === 'yellow' && grid[r][c+3] === 'yellow')
             ) {
                return true
            }
        }
    }
}

// check 4 slots in a column = winner
function verticalWinner(){
    for(let r = 0; r < 4; r++) {
        for (let c = 0; c < 7; c++) {
            if(
                (grid[r][c] === 'red' && grid[r+1][c] === 'red' && grid[r+2][c] === 'red' && grid[r+3][c] === 'red') ||
                (grid[r][c] === 'yellow' && grid[r+1][c] === 'yellow' && grid[r+2][c] === 'yellow' && grid[r+3][c] === 'yellow')
             ) {
                return true
            }
        }
    }
}

// check 4 slots upward diagonal = winner
function diagonalUpWinner(){
    for(let r = 0; r < 3; r++) {
        for (let c = 0; c < 7; c++) {
            if(
                (grid[r][c] === 'red' && grid[r+1][c+1] === 'red' && grid[r+2][c+2] === 'red' && grid[r+3][c+3] === 'red') ||
                (grid[r][c] === 'yellow' && grid[r+1][c+1] === 'yellow' && grid[r+2][c+2] === 'yellow' && grid[r+3][c+3] === 'yellow')
             ) {
                return true
            }
        }
    }
}

// check 4 slots downward diagonal = winner
function diagonalDownWinner(){
    for(let r = 0; r < 3; r++) {
        for (let c = 7; c > 2; c--) {
            if(
                (grid[r][c] === 'red' && grid[r+1][c-1] === 'red' && grid[r+2][c-2] === 'red' && grid[r+3][c-3] === 'red') ||
                (grid[r][c] === 'yellow' && grid[r+1][c-1] === 'yellow' && grid[r+2][c-2] === 'yellow' && grid[r+3][c-3] === 'yellow')
             ) {
                return true
            }
        }
    }
}