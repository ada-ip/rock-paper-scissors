// This function chooses randomly the option (rock, paper or scissors) that the computer will play in a round of the game
function computerPlay(){
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
    }
}