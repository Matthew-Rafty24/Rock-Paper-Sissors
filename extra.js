
// initialise the player and computer score to 0
// declare array of possible hands for the computer
// select elements we need from the DOM
var	computerScore = 0,
	playerScore = 0,
	computerHand = ["rock", "paper", "scissor"],
	playerHandSelector = document.getElementById("player-hand"),
	computerScoreHolder = document.querySelectorAll("#computer-score span")[0],
	playerScoreHolder = document.querySelectorAll("#player-score span")[0],
	computerHandPlaceHolder = document.getElementById("computer-hand"),
	turnResult = document.getElementById("turn-result");


function randomInteger(min, max){
	//returns a random integer between min and max, included
	// used with the computer hand array to randomly select one of three options
	return Math.floor( Math.random() * (max - min + 1) + min)
}

function playTurn(event) {

	var	turnResultContent,
		computerChoice = computerHand[randomInteger(0,2)], // randomly select one of the 3 possible hand for the computer
		playerChoice = event.target.classList[0]; // grab the player's chosen hand

	// update the UI for the computer's hand
	computerHandPlaceHolder.setAttribute("class", "");
	computerHandPlaceHolder.classList.add(computerChoice)
	computerHandPlaceHolder.textContent = computerChoice;

	// both hands match
	if( computerChoice === playerChoice ) {
		turnResult.textContent = "It\s a tie!";
	}
	// computer wins
	else if( (computerChoice === "rock" && playerChoice === "scissor") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissor" && playerChoice === "paper")) {

		// increment computer score, and update UI with computer win message and new computer score
		computerScore++;
		turnResult.textContent = "Computer wins!";
		computerScoreHolder.textContent = computerScore;

	}
	// player wins
	else {

		// increment player score, and update UI with player win message and new player score
		playerScore++;
		turnResult.textContent = "You win!";
		playerScoreHolder.textContent = playerScore;
	}

}


// event handler on the
playerHandSelector.addEventListener(
	"click",
	playTurn,
	false
);
