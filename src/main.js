function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    const computer_choice = getRandomInt(3);
    const options = ["rock", "scissors", "paper"];
    return options[computer_choice];
}

function playRound(playerSelection) {
    const clean_player_selection = playerSelection.toLowerCase();
    const clean_computer_selection = getComputerChoice().toLowerCase();
    const win_direction = ["rock", "scissors", "paper"];
    const player_index = win_direction.findIndex((x) => x === clean_player_selection); 
    const computer_index = win_direction.findIndex((x) => x === clean_computer_selection); 
    let won;
    let results = document.querySelector("#results");
    let running_score = document.querySelector("#running_score");

    if(clean_player_selection == clean_computer_selection){
        results.textContent = "you tied!";
        return;
    }

    won = (player_index+1 === computer_index || player_index-2 === computer_index) ? true : false;

    if(won){
        results.textContent = "You Won! " + win_direction[player_index] + " beats " + win_direction[computer_index];
        if (++win_count >= 5)
            results.textContent = "you Won the game! 5 wins to you!"
    }
    else{
        results.textContent = "You Lost! " + win_direction[computer_index] + " beats " + win_direction[player_index];
        if (++lose_count >= 5)
            results.textContent = "you lost the game! 5 wins to bot!"
    }
    running_score.textContent = `player score: ${win_count} computer score: ${lose_count}`
}

const rock_button = document.querySelector("#rock");
const paper_button = document.querySelector("#paper");
const scissors_button = document.querySelector("#scissors");
let win_count = 0;
let lose_count = 0;
rock_button.addEventListener("click", () => playRound("rock"));
paper_button.addEventListener("click", () => playRound("paper"));
scissors_button.addEventListener("click", () => playRound("scissors"));
