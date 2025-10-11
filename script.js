// function getHumanChoice() {
//     return prompt("Choose what you want to play (Rock, Paper or Scissors)");
// }



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
const btns = document.querySelectorAll(".btn");
btns.forEach(btn => {
  btn.onclick = function buttonClicked() {
    return btn.textContent.slice(3);
    
  };
  btn.onclick = () => {
    const response = document.querySelector('#datH2');
    response.textContent = "...";
    response.textContent = playRound(btn.textContent.slice(3),getComputerChoice());
    let textHumanScore = document.querySelector('#you');
    textHumanScore.textContent = "You : " + HumanScore;

    let textRobotScore = document.querySelector('#robot');
    textRobotScore.textContent = "Robot : " + ComputerScore;

    if (HumanScore == 5) {
        response.textContent = "You Win! Score will reset!"
        setTimeout(function() {
        HumanScore = 0;
        ComputerScore = 0;
        textRobotScore.textContent = "Robot : " + ComputerScore;
        textHumanScore.textContent = "You : " + HumanScore;
    }, 250);
    } else if (ComputerScore == 5) {
        response.textContent = "You lose :(... Score will reset!"
        setTimeout(() => {
        HumanScore = 0;
        ComputerScore = 0;
    }, 250);
    }
  };
});




let HumanScore = 0;
let ComputerScore = 0;

function playRound(HumanChoice, ComputerChoice) {
    if (HumanChoice == ComputerChoice) {

        return "Draw! You both chose " + ComputerChoice;

    } else if (HumanChoice == "Rock") {
        if (ComputerChoice == "Paper") {
            ComputerScore++;
            return "You lose! " + ComputerChoice + " beats " + HumanChoice + ".";
        } else if (ComputerChoice == "Scissors") {
            HumanScore++;
            return "You win! " + HumanChoice + " beats " + ComputerChoice + ".";
        }
    } else if (HumanChoice ==  "Paper") {
        if (ComputerChoice == "Scissors") {
            ComputerScore++;
            return "You lose! " + ComputerChoice + " beats " + HumanChoice + ".";
        } else if (ComputerChoice == "Rock") {
            HumanScore++;
            return "You win! " + HumanChoice + " beats " + ComputerChoice + ".";
        }
    } else if (HumanChoice == "Scissors") {
        if (ComputerChoice == "Rock") {
            ComputerScore++;
            return "You lose! " + ComputerChoice + " beats " + HumanChoice + ".";
        } else if (ComputerChoice == "Paper") {
            HumanScore++;
            return "You win! " + HumanChoice + " beats " + ComputerChoice + ".";
        }
    }
    return "There's an error somewhere :(";
}




// for (let i = 1; i <= 5; i++) {
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();
//     alert(playRound(humanSelection, computerSelection))
//     alert("The Current Score is :\n" + "Human Score : " + HumanScore + "\n" + "Computer Score : " + ComputerScore);
// }

// if (HumanScore == ComputerScore) {
//     alert("Draw! Refresh to play again!")
// } else if (HumanScore < ComputerScore) {
//     alert("You lose! Refresh to play again!")
// } else if (HumanScore > ComputerScore) {
//     alert("You win! Refresh to play again!")
// }