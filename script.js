const cp = document.getElementById("cp"); 
const wizardBtn = document.getElementById("wizard");
const dragonBtn = document.getElementById("dragon");
const knightBtn = document.getElementById("knight");
const status = document.getElementById("status");
let player1 = "";
let player2 = "";

function playWizard() { 
    if (cp.innerText === "1") {
        player1 = "wizard";
    } else {
        player2 = "wizard";
    }
    update();
}

function playDragon() {
    if (cp.innerText === "1") {
        player1 = "dragon";
    } else {
        player2 = "dragon";
    }
    update();
}

function playKnight() {
    if (cp.innerText === "1") {
        player1 = "knight";
    } else {
        player2 = "knight";
    }
    update();
}

function update() {
    if (cp.innerText === "1") {
        cp.innerText = "2";
    } else {
        cp.innerText = "1";
    }
    checkWinner();
}

function checkWinner() {
    if (player1 && player2) {
        if (player1 === "wizard" && player2 === "dragon" || 
            player1 === "dragon" && player2 === "knight" || 
            player1 === "knight" && player2 === "wizard") {
            status.innerText = "Player 1 wins";
        } else if (player2 === "wizard" && player1 === "dragon" || 
                   player2 === "dragon" && player1 === "knight" || 
                   player2 === "knight" && player1 === "wizard") {
            status.innerText = "Player 2 wins";
        } else {
            status.innerText = "It's a tie";
        }
    }
}