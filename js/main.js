var computerChoice;

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

  if (p1 === p2) { return 'TIE'; }
  if ((p1 === 'scissors' && p2 === 'rock') || (p1 === 'rock' && p2 === 'paper') || (p1 === 'paper' && p2 === 'scissors')) { return 'LOSS'; }
  else {  return 'WIN'; }
}

$(document).ready(function() {
	$('.play-button').click(function() { 
		$('.game-container').show();
	});
});


$( ".rock" ).click(function() {
  $( "getRandomInt" ).click();
});