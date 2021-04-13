function playGame(playerInput){

	clearMessages()

	let randomNumber = Math.floor(Math.random() * 3 + 1);

	let computerMove = getMoveName(randomNumber);

	let playerMove = getMoveName(playerInput);

	let result = displayResult(computerMove, playerMove);


}document.getElementById('play-rock').addEventListener('click', function(){
	playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
	playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
	playGame(3);
});