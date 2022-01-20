// Declare selectors and variables

const displayCurrentPlayer = document.getElementById('current-player')
const result = document.getElementById('result')
const row = document.getElementsByClassName('row')
let player = "red"
displayCurrentPlayer.textContent = player
displayCurrentPlayer.style.backgroundColor = 'red'
let win = false
let turn = 0

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
    console.log(`id is: ${id}`)

    const rowNum = id[3]
    const colNum = id[8]

    const lowestAvailableRow = getLowestAvailableRowInColumn(colNum, grid)
    console.log(`Lowest available row: ${lowestAvailableRow}`)

    if (lowestAvailableRow !== null && win === false) {

        turn++

        if (player === "red") {
            grid[lowestAvailableRow][colNum - 1] = "red"
            document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = 'red';
            player = "yellow"
            displayCurrentPlayer.textContent = player
            displayCurrentPlayer.style.backgroundColor = 'yellow'
            if (horizontalWinner() || verticalWinner() || diagonalUpWinner() || diagonalDownWinner()){
                return(alert('Red is the Winner!'))
            }
        } else if (player === 'yellow') {
            grid[lowestAvailableRow][colNum - 1] = "yellow"
            document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = 'yellow';
            player = "red"
            displayCurrentPlayer.textContent = player
            displayCurrentPlayer.style.backgroundColor = 'red'
            if (horizontalWinner() || verticalWinner() || diagonalUpWinner() || diagonalDownWinner()){
                return(alert('Yellow is the Winner!'))
            }
        } else if (turn === 42) {
            displayCurrentPlayer.textContent = 'Nobody wins'
            displayCurrentPlayer.style.backgroundColor = 'grey'
            alert('It\'s a Tie!')
        } else {
            return null
        }
    }

    console.log(`You clicked column ${colNum}`)
    console.log(grid)
    console.log(turn)
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
        
        let oldGrid = document.getElementsByClassName('col')
        for (x of oldGrid) {
            x.style.backgroundColor = 'white';
            console.log('resetGame was called')
        }  
    }



// function consecutiveColour(one, two, three, four) {
//     return (one === two && one === three && one === four && one !== 'white')}

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