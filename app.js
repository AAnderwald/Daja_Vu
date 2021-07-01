/* simple guessing
let favoriteNumber = 18

let pickNumber = prompt("pick a number 1 - 100");


if (pickNumber > favoriteNumber) {
    alert ("too high");
    } else if (pickNumber < favoriteNumber) {
    alert ("too low");
    } else { 
    alert("Got it right");
} 
*/

/* guess with a box.
let favoriteNumber = 18;


document.getElementById("submitGuess").onclick = function(){
    
var guess = document.getElementById("guessBox").value;

    if (guess > favoriteNumber) {
        alert ("too high");
        } else if (guess < favoriteNumber) {
        alert ("too low");
        } else { 
        alert("Got it right in");
    }
}
*/


//random number now with turns and ran using if/ else

let rand = Math.floor(Math.random() * 100) + 1;
var turns = 2;


document.getElementById("submitGuess").onclick = function checkNumber(){

    var guess = document.getElementById("guessBox").value;
    
    if (guess == rand){
            alert("Got it right in");
            return;
    } else {
        turns--;
        if (guess < rand) {
            alert ("That's too low. You have remaining " + turns);
        } else if (guess > rand) {
            alert ("That's too high. You have remaining " + turns);
        }
    }
    if (turns==0){
        alert ("You failed to guess.");
       }
}
  
    function startNewGame() {
        turns = 2;
        num = Math.floor(Math.random() * 100) + 1;
        checkNumber();
        }
        