let numberOfPlayers = 3;
let playerCount = 1;
let actualPlayer = document.getElementById(`player${playerCount}`);



function dice() {

    return Math.floor(Math.random() * 6 + 1)
}

let diceZone = document.getElementById('diceZone');
diceZone.addEventListener("click", diceThrow);




function diceThrow() {
    let diceResult = dice();
    let playerPosition = Number(actualPlayer.parentElement.id);



    document.getElementById(diceResult + playerPosition).append(actualPlayer);
    actualPlayer.classList.add("fade-in");



    document.getElementById('diceResult').innerHTML = diceResult;
    if (playerCount < numberOfPlayers) {
        playerCount++;
    }
    else { playerCount = 1 }
    actualPlayer = document.getElementById(`player${playerCount}`);
}




// DEBUG

document.getElementById('debugZone').innerHTML = "Test 3 joueurs <br>";