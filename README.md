# Snakes & Ladders Board Game

This is a reproduction of the original Snakes & Ladders board game as part of my Web Development Bootcamp at IronHack Brazil.

## Acknowledgments

It was a great challenge to develop my first game. At first it seemed it would be hard to achieve all my goals, but I tried to build my project step by step and things started to happen!
In the end I'm really happy about my work, and I would like to thank my teachers and colleagues for the support that made this possible.

## Getting Started - Falta o link

This game works at the browser and does not need any installation.

* Link to run the game in your browser => [HERE](link).

## Prerequisites

No hardware prerequisites needed. Just run the game and have fun!

## Introduction to the game

Snakes and Ladders, known originally as Moksha Patam, is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. The objective of the game is to navigate one's game piece, according to dice rolls, from the start (bottom square to the finish (top square), helped or hindered by ladders and snakes, respectively.
It is a simple race game based on sheer luck, and is popular with young children.
The historic version had its roots in morality lessons, on which a player's progression up the board represented a life journey complicated by virtues (ladders) and vices (snakes).

## Game rules

The game has very simple rules, and I made just a few adaptations to make this works in a browser based game.
Below are the rules for this particular Snakes & Ladders game and I am also adding a link with the original rules.
More details about it in the "Improvements" section of this read.me.

* The game can be played for two to four players.
* The game will be played with just one dice.
* In each color's turn, the player must roll the dice and then click in their own pawn in order to make the move.
* Each player starts with a pawn on the starting square (the "1" grid square in the bottom right corner).
* Pawns follow a fixed route marked on the gameboard which follows a track from the bottom to the top of the playing area, passing once through every square.
* If a player's pawn lands on the lower-numbered end of a "ladder", the player moves the pawn up to the ladder's higher-numbered square (with another click on the pawn).
* If the player lands on the higher-numbered square of a "snake", the pawn must be moved down to the snake's lower-numbered square (with another click on the pawn).
* The player who is first to bring their pawn to the last square of the track is the winner.
* The player must roll the exact number to reach the final square.
* If the dice roll is too large, the pawn goes off the final square and back again (for example, if a player requiring a 3 to win rolls a 5, the pawn moves forward three spaces, then back two spaces).
* If a player lands in a square that already contains another player's pawn, this player moves one square back (with another click on the pawn).
* ** If a player rolls a 6, the player may, after moving, immediately take another turn (otherwise play passes to the next player in turn). (Pendente)


* Original Rules (there are other rules with some variations, but this one is the most commonly used): [link](https://www.wikihow.com/Play-Snakes-and-Ladders).


## Game and Coding Improvements

During the project I had to make some adaptations in order to present a functional game. Other implementations couldn't be applied so far due to the short schedule. Although, there are many improvements that can be made in the game itself and in it's code. Below are some examples:

### GAME IMPROVEMENTS

* Implementation of dice rolling function in order to decide which color plays first.
* Fix an issue where a player can move another player's piece after rolling the dice. In this case, a player would only be able to move its respective pawn in its turn.
* Implement a new way to restart the game. Once a player reaches the end, show a button to restar the game and allow players to start a new game without having to refresh the page.
* Add responsiveness to the game page to improve mobile experience.
* ** If a player rolls a 6, the player may, after moving, immediately take another turn (otherwise play passes to the next player in turn). (Pendente)


### CODE IMPROVEMENTS

* The development of my project focused on DOM manipulation methods. In my logic, I didn't use object orientation or any frameworks and tools like Canvas. This made a little bit faster to start the coding process, but it made it harder to maintain and implement some improvements in my code.
* The Logic may become simpler if we think about an object oriented solution and use some tools such as Canvas to improve each pawn advance inside the board.
* Better animations can be implemented in order to improve the gamer experience (pawn movement through the board, message boxes, etc.).


## Contributing

Please feel free to fork/clone this repo to look deeper into this funny game and contribute with some of the above improvements if you like. I plan to work on it in the future as well.

## Author & Version Control

* **Ricardo Sorana da Silva** - *Snakes & Ladders Game Version 0.1* - **Published in Feb-29th of 2020**
