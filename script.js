//a function that return randomly 'rock, paper, scissors'
function getComputerChoice() {
    //make arry call choice and sotr "rock, paper, scissors"
    choice  = ["rock", "paper", "scissors"];
    //choose random number from 0 to 2 and store it in 'x'
    let x = Math.floor(Math.random() * 3);
    //return value that equal to 'x' in arry choice
//console.log(choice[x])
    return choice[x];
    
}
//a function that play single game and show the winer
function playRound(playerSelection, computerSelection) {
    //make the value lowercase
    //const playerSelectionLower = playerSelection.toLowerCase();
    //if it's rock try this cases
        if (playerSelection == "rock") {
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
        else if (playerSelection == "paper") {
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
        else if (playerSelection == "scissors") {
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
};
const buttons = document.querySelectorAll('button');
const scoreUi = document.querySelector('#score')
const winnerUi = document.querySelector('#winner')
const computerchoice = document.querySelector('#computerchoice')
const playerchoice = document.querySelector('#playerchoice')
const roundWinnerUI = document.querySelector('#roundWinner')
const container = document.querySelector('#container');
const content = document.createElement('button');
content.classList.add('playagain');
content.textContent = 'Play again';

function game(){
// buttons is a node list. It looks and acts much like an array.

let playerScore = 0;
let computerScore = 0;

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    
    
    //play 5 round 
   if(playerScore != 5 && computerScore != 5) {
    const computerSelection = getComputerChoice();
    const playerSelection = `${button.id}`;
    computerchoice.textContent = `${emoji(computerSelection)}`;
    playerchoice.textContent = `${emoji(playerSelection)}`;
    winnerUi.textContent = "VS";

        
        let roundWiner = playRound(playerSelection, computerSelection);
        //show the winer in this round
        roundWinnerUI.textContent = `${roundWiner}`;
            //if you win player score up by 1
            if (roundWiner ===`you win! ${playerSelection} beats ${computerSelection}`){
                playerScore++;
            }
            //if you win computer score up by 1
            else if(roundWiner ===`you lose! ${computerSelection} beats ${playerSelection}`){
                computerScore++;
            }
            
        //show score
        scoreUi.textContent = `player:${playerScore} vs computer:${computerScore}`;
    
        switch (true) {
            case (playerScore == 5):
                winnerUi.textContent = "you win";
                container.appendChild(content);
                break;
            case (computerScore == 5):
                winnerUi.textContent = "you lose";
                container.appendChild(content);
                break;
        }
   }
});
});
     
}

content.addEventListener('click', () => { 
    scoreUi.textContent = "player:0 vs computer:0";
    winnerUi.textContent = "VS";
    roundWinnerUI.textContent = "";
    game();
    container.removeChild(container.firstElementChild);

});

function emoji(value) {
    switch (value) {
        case "rock":
            return "👊";
            break;
        case "paper":
            return "✋";
            break;
        case "scissors":
            return "✌";
            break;
}
}
game();