// const { options } = require("nodemon/lib/config");

// //Creating variables
// const cells = document.querySelector(".cell");
// const statusText = document.querySelector(".board");
// const restartBtn = document.querySelector("#RestartButton");
// //What are the win Conditions
// const winCondtions = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [2,5,8],
//     [0,4,8],
//     [1,4,7],
//     [2,4,6],
//     [0,4,8]
// ];
// //Creating the option value
// let option = ["","","","","","","",""];
// //Creating currentPlayer X
// let currentPlayer = "X";
// //This function will make the game running false
// let running = false;

// initializeGame();
// //This function will initialize the game
// function initializeGame(){
         
//    cells.forEach(cell => cell.addEventListener("click",cellClicked));
//    restartBtn.addEventListener("click",restartGame);
//    statusText.textContent= `${currentPlayer}'s turn`;
//    running = true;
// };

// //This function will cell click the game
// function cellClicked(){
   
//     const cellIndex = this.getAttribute("cell");
    
//     //This will check whether the cell is empty or not. If the cell is empty then it wil; return
//     if(option[cellIndex] != "" || !running)
//     {
//         return;
//     }

//     updateCell(this, cellIndex);
//     checkWinner();

// };

// //This will updateCell function
// function updateCell(cell, index){

//     option[index] = currentPlayer;
//     cell.textContent = currentPlayer;

// };

// //function changePlayer
// function changePlayer(){

//     currentPlayer = (currentPlayer == "X") ? "O" : "X";
//     statusText.textContent = `${currentPlayer}'s turn`;
    
// };

// //function checkWinner
// function checkWinner()
// {
//     let roundWon = false;

//     for(let i=0; i<winCondtions.length; i++)
//     {
//         const Conditions = winCondtions[i];
//         const cellA = option[Conditions[0]];
//         const cellB = option[Conditions[1]];
//         const cellC = option[Conditions[2]];

//         if(cellA == "" || cellB == "" || cellC == "")
//         {
//                 roundWon = true;
//                // break;
//         }
//         if(cellA == cellB == cellC)
//         {
//                roundWon = true;
//                break;
//         }
//     }

//     if(roundWon)
//     {
//         statusText.textContent = `${currentPlayer} wins!`
//         running != false;
//     }
    
//     else if(!option.include(""))
//     {
//         statusText.textContent = `Draw!`;
//         running = false;
//     }
    
//     else
//     {
//         changePlayer();
//     }

   

//     // if(roundWon)
//     // {
//     //      statusText.textContent = ${currentPlayer} wins!
//     //      running = false;

//     // }


// };

// //function restartGame
// function restartGame()
// {

// };
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");

// Win conditions for the game
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Initialize options and game state
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "Y";
let running = false;

initializeGame();

// Function to initialize the game
function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

// Function that handles cell click
function cellClicked() {
    const cellIndex = this.getAttribute("cellIndex");

    // Check if the cell is already filled or if the game is not running
    if (options[cellIndex] !== "" || !running) {
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}

// Update the clicked cell and the game state
function updateCell(cell, Index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

// Function to change the current player
function changePlayer() {
    currentPlayer = (currentPlayer === "Y") ? "O" : "Y";
    statusText.textContent = `${currentPlayer}'s turn`;
}

// Function to check if there's a winner
function checkWinner() {
    let roundWon = false;

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        // Check if any of the cells are empty
        if (cellA === "" || cellB === "" || cellC === "") {
            continue;
        }

        // Check if all three cells are the same
        if (cellA === cellB && cellB === cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    } else if (!options.includes("")) {
        statusText.textContent = `Draw!`;
        running = false;
    } else {
        changePlayer();
    }
}

// Function to restart the game
function restartGame() {
    options = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => cell.textContent = "");
    running = true;
    currentPlayer = "Y";
    statusText.textContent = `${currentPlayer}'s turn`;
}
