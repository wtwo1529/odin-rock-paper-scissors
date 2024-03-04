function getComputerChoice() {
    let value = Math.floor(Math.random() * 100) + 1;
    console.log(value);
    return value <= 33 ? "rock" : value <= 67 ? "scissors" : "paper";
}

let singleRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock")
    {
        return computerSelection == 'paper' ? "You Lose! Paper beats Rock" : computerSelection == 'rock' ? "It's a Tie!" : "You Win! Rock beats Scissors"
    }
    else if (playerSelection == "scissors")
    {
        return computerSelection == 'paper' ? "You Win! Scissors beats Paper" : computerSelection == "Rock" ? "You Lose! Rock beats Scissors" : "It's a Tie!"
    }
    else {
        return computerSelection == 'scissors' ? "You Lose! Scissors beats Paper" : computerSelection == 'Rock' ? "You Win! Paper beats Rock" : "It's a Tie!"
    }
}

alert(singleRound(prompt("Rock, Paper, or Scissors!"), getComputerChoice()));