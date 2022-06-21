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