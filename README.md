# Snakes & Ladders Board Game - OK

This is a reproduction of the original Snakes & Ladders board game as part of my Web Development Bootcamp at IronHack Brazil.

## Acknowledgments - OK

It was a great challenge to develop my first game. At first it seemed it would be hard to achieve all my objectives, but I tried to build my project step by step and things started to happen!
In the end I'm really happy about my work, and I would like to thank my teachers and colleagues for the support that made this possible.

## Getting Started - Falta o link

This game works at the browser and does not need any installation.

* Link to run the game in your browser => [HERE](link).

## Prerequisites - OK

No hardware prerequisites needed. Just run the game and have fun!

## Introduction to the game - OK

Snakes and Ladders, known originally as Moksha Patam, is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. The object of the game is to navigate one's game piece, according to dice rolls, from the start (bottom square) to the finish (top square), helped or hindered by ladders and snakes, respectively.
It is a simple race game based on sheer luck, and is popular with young children.
The historic version had its roots in morality lessons, on which a player's progression up the board represented a life journey complicated by virtues (ladders) and vices (snakes).

## Game rules - Ao final da implementação, atualizar com as regras que enventualmente não foram aplicadas

The game has very simple rules, and I made just a few adaptations to make this works in a browser based game.
Below are the rules for this particular Snakes & Ladders game and I am also adding a link with the original rules.
More details about it in the "Improvements" section of this read.me.

* ** The game can be played for two to four players (Pendente)
* ** To start the game, the players have to roll the dice. The highest number starts. (Pendente)
* The game will be played with just one dice.
* In each color's turn, the player must roll the dice and then click in their own pawn in order to make the move.
* Each player starts with a pawn on the starting square (the "1" grid square in the bottom right corner).
* Pawns follow a fixed route marked on the gameboard which follows a track from the bottom to the top of the playing area, passing once through every square.
* If a player's pawn lands on the lower-numbered end of a "ladder", the player moves the pawn up to the ladder's higher-numbered square (with another click on the pawn).
* If the player lands on the higher-numbered square of a "snake", the pawn must be moved down to the snake's lower-numbered square (with another click on the pawn).
* ** If a player rolls a 6, the player may, after moving, immediately take another turn (otherwise play passes to the next player in turn). (Pendente)
* ** The player who is first to bring their pawn to the last square of the track is the winner. (Pendente)
* The player must roll the exact number to reach the final square.
* If the dice roll is too large, the pawn goes off the final square and back again (for example, if a player requiring a 3 to win rolls a 5, the pawn moves forward three spaces, then back two spaces).
* ** If a player lands in a square that already contains another player's pawn, this player moves one square back. (Pendente)


* Original Rules (there are other rules with some variations, but this one is the most commonly used): [link](https://www.wikihow.com/Play-Snakes-and-Ladders).

## Game and Coding Improvements - OK

During the project I had to make some adaptations in order to present a functional game. Other implementations couldn't be applied so far due to the short schedule. Although, there are many improvements that can be made in the game itself and in it's code. Below are some examples:

### GAME IMPROVEMENTS - Ao final do projeto, descrever os itens que podem ser melhorados no jogo

Escrever nesta seção os itens que não consegui implementar e que podem melhorar o jogo.

* Implement a functionality to let players choose how many colors will play before the beginning of the game.
* Implementation of dice rolling function in order to decide which color plays first.
* Fix an issue where a player can move another player's piece after rolling the dice.
* Implement rule of returning a piece to the base if another color's piece stops if the same square.
* Implement rule of blocking the path if a player get 2 pieces (of the same color of course) in the same square. Blocking the path means that the other colors became blocked and won't be able to move along.
* Improve the method to move each piece into the home triangle . If the dice returns a number bigger than the number of steps left to the home triangle, the piece must move inside the home triangle and then go back the remaining steps, until the player rolls the exact number needed.
* Add responsiveness to the game page to improve mobile experience.

### CODE IMPROVEMENTS - Ao final do projeto, descrever os itens que podem ser melhorados no meu código

Escrever nesta seção os itens que que podem ser ajustados/orimizados em meu código.

* I made the best to write an organized code. Since my initial proposal was to implement this game applying only DOM manipulation methods, my logic is not object oriented and has no use of any frameworks or tools, such as jQuery or Canvas. Probably because of that, I faced many challenges to manipulate all elements properly and made all logic works in the way I wanted (that's why I changed/adapted/ignored some rules). The base of this game was matrix of "DIV" elements placed on a Ludo's Board Image, and all other elements created, such as the buttons pawns and dice, were made in CSS and them manipulated with Javascript.
* The Logic may become simpler if we think about an object oriented solution and use some tools such as Canvas to improve each pawn advance inside the board.
* Also, better animations can be implemented in order to improve the gamer experience (dice roll animation, pawn movement, message boxes, etc.).

## Contributing - OK

Please feel free to fork/clone this repo to look deeper into this funny game and contribute with some of the above improvements if you like. I plan to work on it in the future as well.

## Author & Version Control - OK

* **Ricardo Sorana da Silva** - *Snakes & Ladders Game Version 0.1* - **Published in Feb-29th of 2020**
