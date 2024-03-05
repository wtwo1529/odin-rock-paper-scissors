function getComputerChoice() {
    let value = Math.floor(Math.random() * 100) + 1;
    return value <= 33 ? "rock" : value <= 67 ? "scissors" : "paper";
}

let singleRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == "rock")
    {
        return computerSelection == 'paper' ? 1 : computerSelection == 'rock' ? 0: 2
    }
    else if (playerSelection == "scissors")
    {
        return computerSelection == 'paper' ? 4 : computerSelection == "Rock" ? 3: 0
    }
    else {
        return computerSelection == 'scissors' ? 5: computerSelection == 'Rock' ? 6: 0
    }
}

const results = document.querySelector('.results');
const btns = document.querySelectorAll('.btn');
const paras = document.querySelectorAll('.result');
const playerScoreText = document.querySelector('.score .playerscore');
const computerScoreText = document.querySelector('.score .computerscore');

results.setAttribute('style', 'font-size: 20px;')

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

btns.forEach((button) => {
    button.addEventListener('click', () => {
        let result = singleRound(button.value, getComputerChoice())
        let resultMessage = (result == 0) ? "It's a Tie!" : (result == 1) ? "You Lose! Paper beats Rock" : (result == 2) ? "You Win! Rock beats Scissors" : (result == 3) ? "You Lose! Rock beats Scissors" : (result == 4) ? "You Win! Scissors beats Paper" : (result == 5) ? "You Lose! Scissors beats Paper" : "You Win! Paper beats Rock";
        alert(resultMessage);
        if (result % 2 == 0 && result !== 0) {
            playerScore++;
        }
        else if (result !== 0)
        {
            computerScore++;
        }  
        playerScoreText.innerText = `Player: ${playerScore}`;
        computerScoreText.innerText = `Computer: ${computerScore}`;
        const para = document.createElement('p');
        para.classList.add('result')
        para.innerText = resultMessage;
        results.appendChild(para);
        rounds++;
        if (rounds == 5)
        {
            results.innerHTML = "";
            if (playerScore > computerScore)
            {
                alert("Player Wins!")
            }
            else if (computerScore > playerScore)
            {
                alert("Computer Wins!")
            }
            else {
                alert("It's a Tie!")
            }
            rounds = 0;
            playerScore = 0;
            computerScore = 0;
            playerScoreText.innerText = `Player:`
            computerScoreText.innerText = `Computer:`;
        }
    })
})

