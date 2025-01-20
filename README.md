# Tic-Tac-Toe Game

This is a simple **Tic-Tac-Toe** game built using **JavaScript**. It allows two players to take turns to play the game, with a game board consisting of 9 cells. The game includes functionality to detect a winner, display the current player's turn, and restart the game when it's finished.

## Key Features

### 1. **DOM Manipulation**
   - Uses **`document.querySelectorAll()`** to select all the cells (`.cell`) and bind event listeners to each one.
   - Updates the DOM dynamically by displaying the player's symbol ("X" or "O") in the clicked cell.
   - Displays game status text (whose turn it is or who won) in the **`#statusText`** element.

### 2. **Event Handling**
   - Handles user interaction by listening for **click** events on each cell using **`addEventListener`**.
   - Restarts the game when the **`restartBtn`** button is clicked.
   - Ensures that players can only click on empty cells.

### 3. **Game State Management**
   - Maintains the game state using the **`options`** array, which tracks the current state of the board.
   - The **`currentPlayer`** variable tracks whose turn it is (either "X" or "O").
   - The **`running`** flag determines whether the game is in progress or has ended (either won or drawn).

### 4. **Game Logic and Win Conditions**
   - Checks for a winner using the **`winConditions`** array, which stores all possible win combinations.
   - The **`checkWinner()`** function iterates over these conditions and checks if any combination of cells has the same value.
   - If a player wins, the game stops, and the winner is displayed. If no player wins and there are no empty cells, the game ends in a draw.

### 5. **Switching Between Players**
   - The **`changePlayer()`** function switches between players ("X" and "O") after each valid move.
   - The **`statusText`** element updates to display which player's turn it is after each move.

### 6. **Cell Update and Player Moves**
   - The **`updateCell()`** function updates the clicked cell's content with the current player's symbol.
   - Players can only make a move in an empty cell, which is validated by checking the value in the **`options`** array.

### 7. **Restart Game Functionality**
   - The **`restartGame()`** function resets the game state, including clearing the board and resetting the current player to "X".
   - Players can restart the game at any time by clicking the "Restart" button.

### 8. **Dynamic Content Update**
   - The **`statusText`** element dynamically updates the UI to display the current state of the game (e.g., whose turn it is, who won, or if there is a draw).

### 9. **CSS Styling**
   - The game board and cells are styled using **CSS** to create an interactive user interface. Each cell is clickable, and the status text is styled to be clear and prominent.

### 10. **Browser Compatibility**
   - The game works across modern browsers, providing a responsive and user-friendly experience.

## Technologies Used
- **HTML5** for game structure and elements
- **CSS** for styling the game board and cells
- **JavaScript** for handling game logic, player turns, and updating the UI
