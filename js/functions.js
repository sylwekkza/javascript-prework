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

	printMessage('');
	return 'nieznany ruch';
}

function displayResult(computerMove, playerMove){
	printMessage('Zagrałem ' + computerMove + ' , a Ty ' + playerMove);

	if (computerMove == 'kamień' && playerMove == 'papier' ||
		computerMove == 'papier' && playerMove == 'nożyce' ||
		computerMove == 'nożyce' && playerMove == 'kamień'){
			printMessage('Wygrywasz!');
	} else if (computerMove == 'kamień' && playerMove == 'nożyce' ||
			   computerMove == 'papier' && playerMove == 'kamień' || 
			   computerMove == 'nożyce' && playerMove == 'papier'){
					printMessage('Przegrałeś!');
	} else if (computerMove == 'kamień' && playerMove == 'kamień' ||
			   computerMove == 'papier' && playerMove == 'papier' ||
	           computerMove == 'nożyce' && playerMove == 'nożyce'){
				   	printMessage('Remis!');
	} else {
		printMessage('Błąd! Wybierz liczbę od 1 do 3 odpowiadającą zagraniom!');
	}
		
}