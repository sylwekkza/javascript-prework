"use strict";
{
	const rock = 'kamień';
	const paper = 'papier';
	const scissors = 'nożyce';
	const messagesDiv = document.getElementById('messages');

	const getMoveName = function(argMoveId) {
		const moveId = parseInt(argMoveId);

		if (moveId === 1)
			return rock;

		if (moveId === 2)
			return paper;

		if (moveId === 3)
			return scissors;

		return 'nieznany ruch';
	}

	const printMessage = function(message) {
		const div = document.createElement('div');
		div.innerHTML = message;
		messagesDiv.appendChild(div);
	}

	const displayResult = function(computerMove, playerMove) {
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

	const clearMessages = function() {
		messagesDiv.innerHTML = '';
	}
	
	var playGame = function(playerInput) {
		const randomNumber = Math.floor(Math.random() * 3 + 1);
		
		const computerMove = getMoveName(randomNumber);
			
		const playerMove = getMoveName(playerInput);
		
		clearMessages();
		
		displayResult(computerMove, playerMove);
	}		
}