const game = document.getElementById("game");

let playerTurn = 0;
game.addEventListener("click", function (event) {
    if (event.target.className == "block") {
        if (playerTurn % 2 == 0) {
            event.target.innerText = "0";
        }
        else {
            event.target.innerText = "X"
        }
        playerTurn++;
    }
})