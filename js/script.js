let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Komputer wybrał ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
	computerMove = 'kamień';
} else if(randomNumber == 2){
	computerMove = 'papier';
} else if(randomNumber == 3){
	computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień 2: papier 3: nożyce');

console.log('Gracz wybrał ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == 1){
	playerMove = 'kamień';
} else if (playerInput == 2){
	playerMove = 'papier';
} else if (playerInput == 3){
	playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);

if(computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Wygrałeś!');
} else if(computerMove == 'kamień' && playerMove =='nożyce'){
	printMessage('Przegrałeś');
} else if(computerMove == 'kamień' && playerMove =='kamień'){
	printMessage('Remis!');
} else if(computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Wygrałeś!');
} else if(computerMove == 'papier' && playerMove =='kamień'){
	printMessage('Przegrałeś');
} else if(computerMove == 'papier' && playerMove =='papier'){
	printMessage('Remis!');
} else if(computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Wygrałeś!');
} else if(computerMove == 'nożyce' && playerMove =='papier'){
	printMessage('Przegrałeś');
} else if(computerMove == 'nożyce' && playerMove =='nożyce'){
	printMessage('Remis!');
} else {
	printMessage('Błąd! Wybierz liczbę od 1 do 3 odpowiadającą zagraniom!');
}