// Declare selectors and variables

const displayCurrentPlayer = document.getElementById('current-player');
const result = document.getElementById('result');

let player1 = "red"
displayCurrentPlayer.textContent = player1
displayCurrentPlayer.style.backgroundColor = 'red'
let win = false

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

        if (player1 === "red") {
            grid[lowestAvailableRow][colNum - 1] = "red"
            document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = 'red';
            player1 = "yellow"
            displayCurrentPlayer.textContent = player1
            displayCurrentPlayer.style.backgroundColor = 'yellow'
        } else {
            grid[lowestAvailableRow][colNum - 1] = "yellow"
            document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = 'yellow';
            player1 = "red"
            displayCurrentPlayer.textContent = player1
            displayCurrentPlayer.style.backgroundColor = 'red'
        }
    }

    console.log(`You clicked column ${colNum}`)
    console.log(grid)
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

