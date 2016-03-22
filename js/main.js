$(document).ready(pageReady);

function pageReady() {
	var userChoice;
	var computerChoice;
	var outcome;
	var userChoiceWins = 0;
	var computerChoiceWins = 0;
}

$(".play-button").click(playClick);
	function playClick() {
	  $(".play-button").slideUp();
	  $(".game-container").slideDown();
	  computerPlay();
	}

	$(".play-again").click(againClick);
	function againClick() {
	  clearText();
	  $(".results-container").slideDown("slow", function() {
	    $(".choices-container").slideDown();    
	  });
	  
	  computerPlay();
	}  

	$(".rock").click(rockClick)
	function rockClick() {
	  userChoice = "rock";
	  getResult();
	}

	$(".paper").click(paperClick)
	function paperClick() {
	  userChoice = "paper";
	  getResult();
	}

	$(".scissors").click(scissorsClick)
	function scissorsClick() {
	  userChoice = "scissors";
	  getResult();
	}

// Generates random computer choice
function computerPlay() {
  var randomNum = getRandomInt(0, 2);
  var choices = ["rock", "paper", "scissors"];
  
  computerChoice = choices[randomNum];
}

// Generates random number from range
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Demonstration of how to generate random computer choice.
computerPlay();
console.log(computerChoice);

function getResult(p1, p2) {

  if (userChoice === computerChoice) { return 'TIE'; }
  if ((userChoice === 'scissors' && computerChoice === 'rock') || (userChoice === 'rock' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'scissors')) { return 'LOSS'; }
  else {  return 'WIN'; }

	  $(".user-choice").text(userChoice);
	  $(".computer-choice").text(computerChoice);
	  $(".results").text(outcome);  
	  $("#computer-tally").text(computerWins);  
	  $("#user-tally").text(userWins);  
	  
	  $(".choices-container").slideUp("slow", function() {
	    $(".results-container").slideDown();
	  });

	}

// Clears choice and results text
	function clearText() {
	  $(".user-choice").text("");
	  $(".computer-choice").text("");
	  $(".results").text("");
	}

// Show choices
$(document).ready(function() {
	$('.play-button').click(function() { 
		$('.game-container').show();
	});
});

