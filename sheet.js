let currentPlayer = "X";
let gameActive = true;
let cells = document.querySelectorAll(".cell");
let statusText = document.getElementById("status");

statusText.textContent = "X's Turn";

function play(cell) {
    if (cell.textContent !== "" || !gameActive) return;

    cell.textContent = currentPlayer;

    if (checkWinner()) {
        statusText.textContent = currentPlayer + " Wins!";
        gameActive = false;
        return;
    }

    if ([...cells].every(cell => cell.textContent !== "")) {
        statusText.textContent = "Draw!";
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = currentPlayer + "'s Turn";
}

function checkWinner() {
    let winPatterns = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    return winPatterns.some(pattern => {
        let [a,b,c] = pattern;
        return cells[a].textContent &&
               cells[a].textContent === cells[b].textContent &&
               cells[a].textContent === cells[c].textContent;
    });
}

function restart() {
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
    gameActive = true;
    statusText.textContent = "X's Turn";
}

