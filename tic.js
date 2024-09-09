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
let currentPlayer = "X";
let running = false;

initializeGame();

//Function to initialize the game
function initializeGame() {
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}

//Function that handles the cell click
//In the options cell clicked version whenever there is empty space between the comman it has empty space which signifies a chracter
//"" Having Seperated By Comma Means The Value Is Null.
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
    options[Index] = currentPlayer;
    cell.textContent = currentPlayer;
}

// Function to change the current player
function changePlayer() {
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}

//Function to check whether there is a winner or not
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
    currentPlayer = "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
