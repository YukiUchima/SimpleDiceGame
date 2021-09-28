function rollDice(){
    var numRand = Math.random() * 6 + 1; /*Generate random number */
    return numRand;
}

var diceNum1 = Math.floor(rollDice()); /*Store first number */
var diceNum2 = Math.floor(rollDice()); /*Store Second number */

document.querySelector(".img1").src = "images/dice" + diceNum1 + ".png";
document.querySelector(".img2").src = "images/dice" + diceNum2 + ".png";

if (diceNum1 > diceNum2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}else if(diceNum1 < diceNum2){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}else {
    document.querySelector("h1").textContent = "Draw";
}