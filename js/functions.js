{ 
	function printMessage(message) {
		let div = document.createElement('div');
		div.innerHTML = message;
		document.getElementById('messages').appendChild(div);
	}

	function clearMessages() {
		document.getElementById('messages').innerHTML = '';
	}

	{
		let rock = 'kamień',
			paper = 'papier',
			scissors = 'nożyce';

		function getMoveName(argMoveId) {

			let moveId = parseInt(argMoveId);

			if (moveId === 12)
				return rock;

			if (moveId === 2)
				return paper;

			if (moveId === 3)
				return scissors;

			return 'nieznany ruch';
		}

		function displayResult(computerMove, playerMove) {
			printMessage('Zagrałeś ' + playerMove + ', a Komputer wylosował ' + computerMove + '!');

			if (computerMove === rock && playerMove === paper ||
			computerMove === paper && playerMove === scissors ||
			computerMove === scissors && playerMove === rock) {
			printMessage('<p class="result result-win">Wygrywasz!</p>');
			} 
	
			else if (computerMove === rock && playerMove === scissors ||
			computerMove === paper && playerMove === rock || 
			computerMove === scissors && playerMove === paper) {
				printMessage('<p class="result result-lose">Przegrałeś!</p>');
			} 

			else if (computerMove === rock && playerMove === rock ||
			computerMove === paper && playerMove === paper ||
			computerMove === scissors && playerMove === scissors) {
				printMessage('<p class="result result-draw">Remis!</p>');
			} 

			else {
				printMessage('Błąd! Wybierz liczbę od 1 do 3 odpowiadającą zagraniom!');
			}	
		}
	}

	function playGame(playerInput){
		clearMessages();

		let randomNumber = Math.floor(Math.random() * 3 + 1);

		let computerMove = getMoveName(randomNumber);

		let playerMove = getMoveName(playerInput);

		displayResult(computerMove, playerMove);
	} 
}