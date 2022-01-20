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
            if (horizontalWinner()){
                return(alert('Winner!'))
            }
        } else if (player === 'yellow') {
            grid[lowestAvailableRow][colNum - 1] = "yellow"
            document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = 'yellow';
            player = "red"
            displayCurrentPlayer.textContent = player
            displayCurrentPlayer.style.backgroundColor = 'red'
        } else if (turn === 42) {
            displayCurrentPlayer.textContent = 'Nobody wins'
            displayCurrentPlayer.style.backgroundColor = 'grey'
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
        player1 = 'red'
        win = false
        displayCurrentPlayer.textContent = player1
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
            if(grid[r][c] === 'red' && grid[r][c+1] === 'red' && grid[r][c+2] === 'red' && grid[r][c+3] === 'red') {
                return true
            }
        }
    }
}