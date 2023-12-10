function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const computer_choice = getRandomInt(3);
    const options = ["rock", "scissors", "paper"];
    return options[computer_choice];
}

function playRound(playerSelection, computerSelection) {
    const clean_player_selection = playerSelection.toLowerCase();
    const clean_computer_selection = computerSelection.toLowerCase();
    const win_direction = ["rock", "scissors", "paper"];
    const player_index = win_direction.findIndex((x) => x === clean_player_selection); 
    const computer_index = win_direction.findIndex((x) => x === clean_computer_selection); 
    let won;

    if(player_index+1 === computer_index || player_index-2 === computer_index){
        won = true;
    }
    else{
        won = false;
    }

    if(won){
        console.log("You Won! " + win_direction[player_index] + " beats " + win_direction[computer_index]);
    }
    else{
        console.log("You Lost! " + win_direction[computer_index] + " beats " + win_direction[player_index]);
    }

    return won;
}

function game(){
    let games_player_won = 0;
    let games_computer_won = 0;
    let won;

    while(games_player_won < 5 && games_computer_won < 5){
        let playerSelection = prompt("enter rock, paper, or scissors").toLowerCase();
        let computerSelection = getComputerChoice();
        if(playerSelection === computerSelection){
            console.log("You Tied! play again");
            continue;
        }
        won = playRound(playerSelection, computerSelection)
        if(won){
            games_player_won++;
        }
        else{
            games_computer_won++;
        }
    }

    if(games_player_won === 5){
        console.log("YOU WIN");
    }
    else{
        console.log("YOU LOSE :(");
    }
}
 

game();
