// Make your changes to store and update game state in this file
// ok, let's do this. cool beans!

let grid = [[null, null, null], [null, null, null], [null, null, null]]

let player = "nought"
let win = false;

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.
function takeTurn(row, column) {
    if (!grid[row][column] || win === false) {
        grid[row][column] = player
        if (grid[row][column] === "nought") {
            player = "cross"
        } else {
            player = "nought"
        } 
        console.log("takeTurn was called with row: "+row+", column:"+column);
    }
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    // horizontal winner
    if (grid[0][0]  === "nought" && grid[0][1] === "nought" && grid[0][2] === "nought") {
       win = true
       return "noughts"
   } else if (grid[1][0] === "nought" && grid[1][1] === "nought" && grid[1][2] === "nought") {
      return "noughts"
   } else if (grid[2][0] === "nought" && grid[2][1] === "nought" && grid[2][2] === "nought") {
       return "noughts"
   } else if (grid[0][0] === "cross" && grid[0][1] === "cross"  && grid[0][2] === "cross") {
      return "crosses"
   } else if (grid[1][0] === "cross" && grid[1][1] === "cross" && grid[1][2] === "cross") {
      return "crosses"
   } else if (grid[2][0] === "cross" && grid[2][1] === "cross" && grid[2][2] === "cross") {
      return "crosses"
   }
    console.log("checkWinner was called");
    return null; 
}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    
    grid = [[null, null, null], [null, null, null], [null, null, null]]
    player = "nought"
    win = false

    // ^^   so actually you are meant to set the grid array to [null....],[],[]
    // so you are almost there
    // how do you assign grid to be gridRest?.... (it's a one liner)

    //but I thought I did that by creating the gridReset const array above?


    // no... yes.  shall we try run it agin now..
    // you here?
    
}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return grid;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
