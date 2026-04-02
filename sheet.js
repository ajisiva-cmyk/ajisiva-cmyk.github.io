let currentPlayer = "X";
let gameActive = true;

function play(cell){

    if(cell.innerHTML !== "" || !gameActive){
        return;
    }

    cell.innerHTML = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner(){

    let cells = document.getElementsByClassName("cell");

    let winPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for(let pattern of winPatterns){

        let a = cells[pattern[0]].innerHTML;
        let b = cells[pattern[1]].innerHTML;
        let c = cells[pattern[2]].innerHTML;

        if(a !== "" && a === b && b === c){
            document.getElementById("status").innerText = a + " Wins!";
            gameActive = false;
        }
    }
}

function restart(){

    let cells = document.getElementsByClassName("cell");

    for(let cell of cells){
        cell.innerHTML = "";
    }

    gameActive = true;
    currentPlayer = "X";
    document.getElementById("status").innerText = "";
}
