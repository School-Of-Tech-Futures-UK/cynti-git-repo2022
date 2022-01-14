// Declare selectors and variables

const column = document.getElementsByClassName("column");
const row = document.getElementsByClassName("row");
const grid = document.getElementsByClassName("grid");
const displayCurrentPlayer = document.getElementById('current-player');
const result = document.getElementById('result');
let currentPlayer = 'red';
const slotPosition = document.getElementById[4];

// function to take a turn

function takeTurn() {
    for (let r = 0; r < row.length; r++) {
        for (let c = 0; c < column.length; c++) {
            grid[r][c].onclick = () => {
                alert('You clicked ' + i);
            }
      
        }
        
    }
}
