function getHumanChoice() {
    return prompt("Choose what you want to play (Rock, Paper or Scissors)");
}

function getComputerChoice() {
    let value = Math.random();
    if (value < 0.33) {
        return "Rock";
    } else if (0.33 < value && value < 0.66) {
        return "Paper";
    } else if (0.66 < value) {
        return "Scissors";
    }
    
}

let HumanScore = 0;
let ComputerScore = 0;

function playRound(HumanChoice, ComputerChoice) {
    let FixedHumanChoice = HumanChoice[0].toUpperCase() + HumanChoice.slice(1).toLowerCase();
    if (FixedHumanChoice == ComputerChoice) {

        return "Draw! You both chose " + ComputerChoice;

    } else if (FixedHumanChoice == "Rock") {
        if (ComputerChoice == "Paper") {
            ComputerScore++;
            return "You lose! " + ComputerChoice + " beats " + FixedHumanChoice + ".";
        } else if (ComputerChoice == "Scissors") {
            HumanScore++;
            return "You win! " + FixedHumanChoice + " beats " + ComputerChoice + ".";
        }
    } else if (FixedHumanChoice ==  "Paper") {
        if (ComputerChoice == "Scissors") {
            ComputerScore++;
            return "You lose! " + ComputerChoice + " beats " + FixedHumanChoice + ".";
        } else if (ComputerChoice == "Rock") {
            HumanScore++;
            return "You win! " + FixedHumanChoice + " beats " + ComputerChoice + ".";
        }
    } else if (FixedHumanChoice == "Scissors") {
        if (ComputerChoice == "Rock") {
            ComputerScore++;
            return "You lose! " + ComputerChoice + " beats " + FixedHumanChoice + ".";
        } else if (ComputerChoice == "Paper") {
            HumanScore++;
            return "You win! " + FixedHumanChoice + " beats " + ComputerChoice + ".";
        }
    }
    return "There's an error somewhere :(";
}


for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    alert(playRound(humanSelection, computerSelection))
    alert("The Current Score is :\n" + "Human Score : " + HumanScore + "\n" + "Computer Score : " + ComputerScore);
}

if (HumanScore == ComputerScore) {
    alert("Draw! Refresh to play again!")
} else if (HumanScore < ComputerScore) {
    alert("You lose! Refresh to play again!")
} else if (HumanScore > ComputerScore) {
    alert("You win! Refresh to play again!")
}