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

// This function capitalizes a player's selection
function capitalizeSelection(selection) {
    let selectionCapitalized = selection.charAt(0).toUpperCase();
    for (i = 1; i < selection.length; i++) {
        selectionCapitalized += selection.charAt(i).toLowerCase();
    }
    return selectionCapitalized;
}

// This function checks if the player's selection is a valid selection or if they have introduced a string not included in the options of the game instead
function checkSelection(selection) {
    let validSelection = false;
    // If the string introduced by the player is not empty it is compared to all the valid options
    if(!isEmpty(selection)) {
        let selectionCapitalized = capitalizeSelection(selection);
        if(selectionCapitalized === "Rock" || selectionCapitalized === "Paper" || selectionCapitalized === "Scissors"){
            validSelection = true;
        }
    }
    return validSelection;
}

// This function checks if a string is an empty string
function isEmpty(string) {
    return string.length === 0;
}

// This function allows the player to play one round of the game against the computer
function playRound(playerSelection, computerSelection) {
    let roundWinner;

    // The player's selection is capitalized so it can be compared to the computer's selection because the player's selections needs to be case insensitive
    let playerSelectionCapitalized = capitalizeSelection(playerSelection);

    // It is checked if the player has won, tied or lost against the computer
    if(playerSelectionCapitalized === computerSelection){
        console.log(`It's a tie! You both have chosen ${computerSelection}`);
        roundWinner = "tie";
    }
    else if (playerSelectionCapitalized === "Rock" && computerSelection === "Scissors" || playerSelectionCapitalized === "Paper" && computerSelection === "Rock" || 
    playerSelectionCapitalized === "Scissors" && computerSelection === "Paper") {
        console.log(`You win! ${playerSelectionCapitalized} beats ${computerSelection}`);
        roundWinner = "player";
    }
    else {
        console.log(`You lose! ${computerSelection} beats ${playerSelectionCapitalized}`);
        roundWinner = "computer";
    }
    return roundWinner;
}

// This function prints the winner of the game according to the scores of both the player and the computer
function printWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log(`The score is... ${playerScore} to ${computerScore}! You win!!!`);
    }
    else if (playerScore < computerScore) {
        console.log(`The score is... ${playerScore} to ${computerScore}! You lose :(`);
    }
    else {
        console.log(`The score is... ${playerScore} to ${computerScore}! It's a tie!`);
    }
}

// This functions allows the player to play five rounds of Rock, Paper, Scissors against the computer
function game(){
    // Player and computer points
    let playerScore = 0;
    let computerScore = 0;

    // The game lasts five rounds
    for(i = 0; i < 5; i++) {
        let playerSelection = prompt("What do you want to play? (Rock, paper, scissors):");

        // It is checked if the player has introduced a valid option or not
        if(checkSelection(playerSelection)){

            // A round of the game is played and the player/computer scores are modified according to the winner of the game
            let winner = playRound(playerSelection, computerPlay());
            if(winner === "player") {
                playerScore++;
            }
            else if (winner === "computer") {
                computerScore++;
            }
            else {
                playerScore++;
                computerScore++;
            }
        }
        // If the player has not introduced a valid option an error message is printed
        else {
            console.log("Invalid option");
        }
    }

    // When the game finishes the winner is printed
    printWinner(playerScore, computerScore);
}
