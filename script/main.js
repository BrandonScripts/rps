//rock, paper, or scissors choices stored in an array
const choices = ["rock","paper","scissors"];
const winners = [];

//play the game
function game(){
    for(let i = 1; i <= 5; i++){
        playRound(i);
    }
    document.querySelector('#start').textContent = "Play new game";
    logWins();
}
//play a round
function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    roundWins(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    let input = prompt("Type Rock, Paper or Scissors");
    while (input == null){
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt(
            "Please type Rock, Paper or Scissors"
        );
        while (input == null){
            input = prompt("Type Rock, Paper or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}
//randomly selection rock, paper or scissors from choices array for cpu
function computerChoice(){
    return choices[Math.floor(Math.random() * choices.length)];
}
//validate inputs
function validateInput(choice){
    return choices.includes(choice)
}
//compare use selection to computer selection and determine outcome
function checkWinner(playerPick, cpuPick){
    if(playerPick === cpuPick){
        return "Tie";
    } else if(
        (playerPick === "rock" && cpuPick === "scissors") || 
        (playerPick === "paper" && cpuPick === "rock") || 
        (playerPick === "scissors" && cpuPick === "paper")
        ){
        return "User";
    }
    else {
        return "CPU";
    }
}

//filter method on new winners arrays to determine which item, or winner won
function logWins(){
    let playerWins = winners.filter((item) => item == "User").length;
    let computerWins = winners.filter((item) => item == "CPU").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results:");
    console.log("Player Wins: ", playerWins);
    console.log("CPU Wins: ", computerWins);
    console.log("Ties: ", ties );
}

function roundWins(playerChoice, computerChoice, winner, round){
    console.log("Round: ", round)
    console.log("Player Choice: ", playerChoice);
    console.log("CPU Choice: ", computerChoice);
    console.log(winner, "won the Round");
    console.log("------------");
}

document.querySelector("#start").addEventListener('click', () => {
    game();
});