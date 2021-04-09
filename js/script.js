let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = 'nieznany ruch';

if (randomNumber == 1){
	computerMove = 'kamień';
} else if (randomNumber == 2){
	computerMove = 'papier';
} else if (randomNumber == 3){
	computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień 2: papier 3: nożyce');

let playerMove = 'nieznany ruch';

if (playerInput == 1){
	playerMove = 'kamień';
} else if (playerInput == 2){
	playerMove = 'papier';
} else if (playerInput == 3){
	playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if (computerMove == 'kamień' && playerMove == 'papier' || computerMove == 'papier' && playerMove == 'nożyce' || computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Wygrałeś!');
} else if (computerMove == 'kamień' && playerMove == 'nożyce' || computerMove == 'papier' && playerMove == 'kamień' || computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Przegrałeś');
} else if (computerMove == 'kamień' && playerMove == 'kamień' || computerMove == 'papier' && playerMove == 'papier' || computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('Remis!');
} else {
	printMessage('Błąd! Wybierz liczbę od 1 do 3 odpowiadającą zagraniom!');
}
