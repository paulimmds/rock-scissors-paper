function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection){
    let playerSelec = playerSelection.toLowerCase()

    switch (playerSelec) {
        case 'rock': 
            if (computerSelection === 'paper'){
                return 0
            }
            else if (computerSelection === 'rock') {
                return 1
            }
            else {
                return 2
            }
        case "paper":   
            if (computerSelection === 'paper'){
                return 1
            }
            else if (computerSelection === 'rock') {
                return 2
            }
            else {
                return 0
            }
        case (  'scissors'):
            if (computerSelection === 'paper'){
                return 2
            }
            else if (computerSelection === 'rock') {
                return 0
            }
            else {
                return 1
            }
        default:
            return Error
    }
}

function game(){
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelec = Error
        while (playerSelec == Error) {
            playerSelec = prompt('Rock, Scissors or Paper! Choose one:')   
        }

        let result = playRound(playerSelec, getComputerChoice) // Player Loose: 0  Draw: 1 Win: 2

        switch (result) {
            case 0:
                computerPoints++;
                break;
            case 2:
                playerPoints++;
                break;
            default:
                break;
        }
    }

    switch (playerPoints){
        case playerPoints < computerPoints:
            prompt(`You lose! You ${playerPoints} X ${computerPoints} Computer`);
            break;
        case playerPoints == computerPoints:
            prompt(`You Draw! You ${playerPoints} X ${computerPoints} Computer`);
        default:
            prompt(`You Win! You ${playerPoints} X ${computerPoints} Computer`)
    }
}