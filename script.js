//a function that return randomly 'rock, paper, scissors'
function getComputerChoice() {
//make arry call choice and sotr "rock, paper, scissors"
    choice  = ["rock", "paper", "scissors"];
//choose random number from 0 to 2 and store it in 'x'
    let x = Math.floor(Math.random() * 3);
//return value that equal to 'x' in arry choice
    return choice[x];
    
}
getComputerChoice();