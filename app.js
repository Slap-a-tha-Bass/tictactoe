// finds all of the cells in the string .row > div
let cells = document.querySelectorAll('.row > div');

let currentPlayer = 'X';
let moveCounter = 0
// adds events to each cell 
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

// designates an 'X' for each click 
function cellClicked(e) {
    if (e.target.textContent !== '') {
        return;
    }
    moveCounter++
    e.target.textContent = currentPlayer; //draws current player to cell
    checkForWinner();
    swapTurn();
}
// need to swap to circles turn 
function swapTurn() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}
// need to define winner
function checkForWinner() {
    if (checkCombo(0, 1, 2)) {
        setTimeout(function () {
            swapTurn();
            alert(currentPlayer + ' WINS');
            window.location.reload();
        }, 50);
    } else if (checkCombo(3, 4, 5)) {
        setTimeout(function () {
            swapTurn();
            alert(currentPlayer + ' WINS');
            window.location.reload();
        }, 50);

    } else if (checkCombo(6, 7, 8)) {
        setTimeout(function () {
            swapTurn();
            alert(currentPlayer + ' WINS');
            window.location.reload();
        }, 50);
    } else if (checkCombo(0, 3, 6)) {
        setTimeout(function () {
            swapTurn();
            alert(currentPlayer + ' WINS');
            window.location.reload();
        }, 50);
    } else if (checkCombo(1, 4, 7)) {
        setTimeout(function () {
            swapTurn();
            alert(currentPlayer + ' WINS');
            window.location.reload();
        }, 50);
    } else if (checkCombo(2, 5, 8)) {
        setTimeout(function () {
            swapTurn();
            alert(currentPlayer + ' WINS');
            window.location.reload();
        }, 50);
    } else if (checkCombo(0, 4, 8)) {
        setTimeout(function () {
            swapTurn();
            alert(currentPlayer + ' WINS');
            window.location.reload();
        }, 50);
    } else if (checkCombo(2, 4, 6)) {
        setTimeout(function () {
            swapTurn();
            alert(currentPlayer + ' WINS');
            window.location.reload();
        }, 50);

    } else if (moveCounter === 9) {
        setTimeout(function () {
            alert('DRAW');
            window.location.reload();
        }, 50);
    }
}
function checkCombo(x, y, z) {
    if (cells[x].textContent === currentPlayer && cells[y].textContent === currentPlayer && cells[z].textContent === currentPlayer) {
        return true;
    } else {
        return false;
    }
}



