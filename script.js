// getting elements
const cp = document.getElementById('cp');
const board = [["", "", ""], ["", "", ""], ["", "", ""]];
const status = document.getElementById('over');

// update player
function update_player() {
    if (cp.innerHTML == "Player X's Turn") {
        cp.innerHTML = "Player O's Turn";
    } else {
        cp.innerHTML = "Player X's Turn";
    }
}

// make move
function makeMove(button) {
    let name = button.name;
    let pos = name.split("-")
    //over.innerText = pos;
    if (cp.innerHTML == "Player X's Turn") {
        button.innerText = "X";
        button.style.color = "rgba(3, 248, 252)";
        button.disabled = true;
        board[pos[0]][pos[1]] = "X";
    } else {
        button.innerText = "O";
        button.style.color = "rgb(3, 252, 6)";
        button.disabled = true;
        board[pos[0]][pos[1]] = "O";
    }
    if (checkWin() == true) {
        status.innerText = `${cp.innerText.slice(7,8)} wins.`;
        freeze_btn();
    }
    else if (checkWin() === "draw") {
        status.innerText = "Draw";
    }
    else{
        update_player();
    }
}

// freeze btns after match
function freeze_btn() {
    let btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        btn.disabled = true;
    });
}

// cheking winner
function checkWin() {
    // check rows
    if (board[0][0] === board[0][1] &&
    board[0][1] === board[0][2] && board[0][0] !== "") {
        let btn1 = document.getElementsByName('0-0');
        let btn2 = document.getElementsByName('0-1');
        let btn3 = document.getElementsByName('0-2');
        
        btn1[0].style.backgroundColor = "blue";
        btn2[0].style.backgroundColor = "blue";
        btn3[0].style.backgroundColor = "blue";
        return true;
    }
    else if (board[1][0] === board[1][1] &&
    board[1][1] === board[1][2] && board[1][1] !== "") {
        let btn1 = document.getElementsByName('1-0');
        let btn2 = document.getElementsByName('1-1');
        let btn3 = document.getElementsByName('1-2');
        
        btn1[0].style.backgroundColor = "blue";
        btn2[0].style.backgroundColor = "blue";
        btn3[0].style.backgroundColor = "blue";
        
        return true;
    }
    else if (board[2][0] === board[2][1] &&
    board[2][1] === board[2][2] && board[2][0] !== "") {
        let btn1 = document.getElementsByName('2-0');
        let btn2 = document.getElementsByName('2-1');
        let btn3 = document.getElementsByName('2-2');
        
        btn1[0].style.backgroundColor = "blue";
        btn2[0].style.backgroundColor = "blue";
        btn3[0].style.backgroundColor = "blue";
        
        return true;
    }
    // check columns
    else if (board[0][0] === board[1][0] &&
    board[1][0] === board[2][0] && board[2][0] !== "") {
        let btn1 = document.getElementsByName('0-0');
        let btn2 = document.getElementsByName('1-0');
        let btn3 = document.getElementsByName('2-0');
        
        btn1[0].style.backgroundColor = "blue";
        btn2[0].style.backgroundColor = "blue";
        btn3[0].style.backgroundColor = "blue";
        
        return true;
    }
    else if (board[0][1] === board[1][1] &&
    board[1][1] === board[2][1] && board[2][1] !== "") {
        let btn1 = document.getElementsByName('0-1');
        let btn2 = document.getElementsByName('1-1');
        let btn3 = document.getElementsByName('2-1');
        
        btn1[0].style.backgroundColor = "blue";
        btn2[0].style.backgroundColor = "blue";
        btn3[0].style.backgroundColor = "blue";
        
        return true;
    }
    else if (board[0][2] === board[1][2] &&
    board[1][2] === board[2][2] && board[2][2] !== "") {
        let btn1 = document.getElementsByName('0-2');
        let btn2 = document.getElementsByName('1-2');
        let btn3 = document.getElementsByName('2-2');
        
        btn1[0].style.backgroundColor = "blue";
        btn2[0].style.backgroundColor = "blue";
        btn3[0].style.backgroundColor = "blue";
        
        return true;
    }
    // check diagonals
    else if (board[0][0] === board[1][1] &&
    board[1][1] === board[2][2] && board[2][2] !== "") {
        let btn1 = document.getElementsByName('0-0');
        let btn2 = document.getElementsByName('1-1');
        let btn3 = document.getElementsByName('2-2');
        
        btn1[0].style.backgroundColor = "blue";
        btn2[0].style.backgroundColor = "blue";
        btn3[0].style.backgroundColor = "blue";
        
        return true;
    }
    else if (board[0][2] === board[1][1] &&
    board[1][1] === board[2][0] && board[2][0] !== "") {
        let btn1 = document.getElementsByName('0-2');
        let btn2 = document.getElementsByName('1-1');
        let btn3 = document.getElementsByName('2-0');
        
        btn1[0].style.backgroundColor = "blue";
        btn2[0].style.backgroundColor = "blue";
        btn3[0].style.backgroundColor = "blue";
        
        return true;
    }
    else if (checkDraw()) {
        return "draw";
    }
}

function checkDraw() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "") {
                return false; // Found an empty cell, game is not a draw
            }
        }
    }
    // If no empty cell is found, it's a draw
    return true;
} 
