function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
	if(argMoveId == 1)
	
		return 'kamień';

	else if(argMoveId == 2)

		return 'papier';

	else if(argMoveId == 3)

		return 'nożyce';

		return 'nieznany ruch';
}

let k = 'kamień'
let p = 'papier'
let n = 'nożyce'

function displayResult(computerMove, playerMove){
	printMessage('Zagrałem ' + computerMove + ' , a Ty ' + playerMove);

	if (computerMove == k && playerMove == p ||
		computerMove == p && playerMove == n ||
		computerMove == n && playerMove == k){
			printMessage('Wygrywasz!');

	} else if (computerMove == k && playerMove == n ||
			   computerMove == p && playerMove == k || 
			   computerMove == n && playerMove == p){
					printMessage('Przegrałeś!');

	} else if (computerMove == k && playerMove == k ||
			   computerMove == p && playerMove == p ||
	           computerMove == n && playerMove == n){
				   	printMessage('Remis!');

	} else {
		printMessage('Błąd! Wybierz liczbę od 1 do 3 odpowiadającą zagraniom!');
	}
		
}