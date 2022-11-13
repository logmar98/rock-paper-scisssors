//a function that return randomly 'rock, paper, scissors'
function getComputerChoice() {
    //make arry call choice and sotr "rock, paper, scissors"
    choice  = ["rock", "paper", "scissors"];
    //choose random number from 0 to 2 and store it in 'x'
    let x = Math.floor(Math.random() * 3);
    //return value that equal to 'x' in arry choice
console.log(choice[x])
    return choice[x];
    
}
//a function that play single game and show the winer
function playRound(playerSelection, computerSelection) {
    //make the value lowercase
    const playerSelectionLower = playerSelection.toLowerCase();
    //if it's rock try this cases
        if (playerSelectionLower == "rock") {
            switch (computerSelection) {
                case "rock":
                    result = "tie"
                    break;
                case "paper":
                    result = `you lose! ${computerSelection} beats ${playerSelection}`; 
                    break;
                case "scissors":
                    result = `you win! ${playerSelection} beats ${computerSelection}`; 
                    break;
            }
        }
    //if it's paper try this cases
        else if (playerSelectionLower == "paper") {
            switch (computerSelection) {
                case "paper":
                    result = "tie"
                    break;
                case "scissors":
                    result = `you lose! ${computerSelection} beats ${playerSelection}`; 
                    break;
                case "rock":
                    result = `you win! ${playerSelection} beats ${computerSelection}`; 
                    break;
            }
        }
    //if it's scissors try this cases
        else if (playerSelectionLower == "scissors") {
            switch (computerSelection) {
                case "scissors":
                    result = "tie"
                    break;
                case "rock":
                    result = `you lose! ${computerSelection} beats ${playerSelection}`; 
                    break;
                case "paper":
                    result = `you win! ${playerSelection} beats ${computerSelection}`; 
                    break;
            }
        }
    return result;
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {

//choice of the player and the computer
const playerSelection = prompt("choose rock, paper, scissors");
const computerSelection = getComputerChoice();
//show the winer
let roundWiner = playRound(playerSelection, computerSelection);
console.log(roundWiner);
        
        if (roundWiner ===`you win! ${playerSelection} beats ${computerSelection}`){
            playerScore++;
        }
        else if(roundWiner ===`you lose! ${computerSelection} beats ${playerSelection}`){
            computerScore++;
        }
        console.log(`player:${playerScore} vs computer:${computerScore}`);
    }
}
game();