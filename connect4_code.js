// Declare selectors and variables

const displayCurrentPlayer = document.getElementById('current-player');
const result = document.getElementById('result');

let player1 = "red"
let player2 = "yellow"
let win = false

let grid = [
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null]
]

function takeTurn(e) {
    const id = e.target.id   // 'row1-col1'   ________x
    // 'rowY-colX' 

    const rowNum = id[3]
    const colNum = id[8]

    const lowestAvailableRow = getLowestAvailableRowInColumn(colNum, grid)
    console.log(`Lowest available row: ${lowestAvailableRow}`)

    if (lowestAvailableRow !== null || win === false) {
        turn++

        if (player1 === "red") {
            grid[lowestAvailableRow][colNum - 1] = "red"
            document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = 'red';
            player1 = "yellow"
        } else {
            grid[lowestAvailableRow][colNum - 1] = "yellow"
            document.getElementById(`row${lowestAvailableRow + 1}-col${colNum}`).style.backgroundColor = 'yellow';
            player1 = "red"
        }
    }

    console.log(`You clicked column ${colNum}`)
    console.log(`Turn number ${turn}`)
    console.log(grid)
}


function getLowestAvailableRowInColumn(columnNumber, myGrid) {
    for (let i = 5; i >= 0; i--) {
        if (myGrid[i][columnNumber - 1] === null) {
            return i
        }
    }

    return null;
}

    
function resetGame() {
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
        console.log('reset function called')
    };