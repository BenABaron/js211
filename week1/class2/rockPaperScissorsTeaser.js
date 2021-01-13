/**
 * 
 * @param {string} input1 Player 1's choice 
 * @param {string} input2 Player 2's choice
 */
function rockPaperScissors(input1, input2) {
  if (input1 == input2) {
    console.log("It's a tie!")
  } else {
    // Player 1 picks rock
    if (input1 === "rock") {
      if (input2 === "paper") {
        console.log("Rock loses to paper. Player 2 wins!")
      } else if (input2 === "scissors") {
        console.log("Rock beats scissors. Player 1 wins!")
      }
    }
    // Player 1 picks paper
    if (input1 === "paper") {
      if (input2 === "rock") {
        console.log("Paper beats rock. Player 1 wins!")
      } else if (input2 === "scissors") {
        console.log("Paper loses to scissors. Player 2 wins!")
      }
    }
    // Player 1 picks scissors
    if (input1 === "scissors") {
      if (input2 === "rock") {
        console.log("Scissors lose to rock. Player 2 wins!")
      } else if (input2 === "paper") {
        console.log("Scissors beats paper. Player 1 wins!")
      }
    }
  }
}

rockPaperScissors('paper', 'paper')