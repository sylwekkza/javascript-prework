let rock = 'kamień';
let paper = 'papier';
let scissors = 'nożyce';

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	if (argMoveId == 1)
		return rock;

	if (argMoveId == 2)
		return paper;

	if (argMoveId == 3)
		return scissors;

		return 'nieznany ruch';
}

function displayResult(computerMove, playerMove){
	printMessage('Zagrałem ' + computerMove + ' , a Ty ' + playerMove);

	if (computerMove == rock && playerMove == paper ||
		computerMove == paper && playerMove == scissors ||
		computerMove == scissors && playerMove == rock){
			printMessage('Wygrywasz!');

	} else if (computerMove == rock && playerMove == scissors ||
			   computerMove == paper && playerMove == rock || 
			   computerMove == scissors && playerMove == paper){
					printMessage('Przegrałeś!');

	} else if (computerMove == rock && playerMove == rock ||
			   computerMove == paper && playerMove == paper ||
	           computerMove == scissors && playerMove == scissors){
				   	printMessage('Remis!');

	} else {
		printMessage('Błąd! Wybierz liczbę od 1 do 3 odpowiadającą zagraniom!');
	}
		
}