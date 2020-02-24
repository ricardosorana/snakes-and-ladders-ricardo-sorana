class Player {
  constructor(color) {
    this.color = color;
    this.position = 1;
  }

}

let player1 = new Player('red');
let player2 = new Player('blue');
let turn = player1;
let diceNumber;



//============================ MOVE FUNCTION ============================//

function movePlayer(randomNumber, player, turn) {

  let pawn = document.createElement('div');

  turn.position += randomNumber;

  // let newParent;

  if(turn.position <= 63){
    document.getElementById('position-' + turn.position).appendChild(pawn);
    // console.log(document.getElementById('position-' + turn.position).childNodes.length);
    // newParent = document.getElementById('position-' + turn.position);
  } else {
    turn.position = 63 - (turn.position-63)
    document.getElementById('position-' + turn.position).appendChild(pawn);
  }
  console.log(`Posição: ${turn.position}`);

  
  
  parent = document.getElementById(player).parentNode;
  child = document.getElementById(player);
  
  parent.removeChild(child);
  
  pawn.id = player;
  
  // checkSquareOccupied(newParent, turn, player);
  checkSnakes(turn, turn.position);

  document.getElementById(player).addEventListener("click", function(){movePlayer(diceNumber, player, turn)});

  checkTurn();

}

function checkTurn() {
  if(turn == player1) {
    return turn = player2;
  }
  return turn = player1;
}

// function checkSquareOccupied(parent, turn, player) {
//   if(parent.childNodes.length > 1) {
//     console.log(turn);
//     turn.position -=1;
//     document.getElementById(player).addEventListener("click", function(){movePlayer(diceNumber, player, turn)});
//   }
//   return;  
// }



function checkSnakes(turn, position){
  switch (position) {
    case 3:
      turn.position = 17;
      diceNumber = 0;
      break;
    case 20:
      turn.position = 33;
      diceNumber = 0;
      break;
    case 25:
      turn.position = 11;
      diceNumber = 0;
      break;
    case 28:
      turn.position = 42;
      diceNumber = 0;
      break;
    case 32:
      turn.position = 16;
      diceNumber = 0;
      break;
    case 40:
      turn.position = 46;
      diceNumber = 0;
      break;
    case 47:
      turn.position = 61;
      diceNumber = 0;
      break;
    case 48:
      turn.position = 34;
      diceNumber = 0;
      break;
    case 58:
      turn.position = 45;
      diceNumber = 0;
      break;
    default:
      break;
  }
}

//============================ MOVE FUNCTION ============================//



//============================ START ============================//

const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {

  startButton.style.display = 'none';
  
  let pawnRed = document.createElement('div');
  pawnRed.id = "red-player";
  document.getElementById('position-1').appendChild(pawnRed);
  document.getElementById("red-player").addEventListener("click", function(){movePlayer(diceNumber, "red-player", turn)});


  let pawnBlue = document.createElement('div');
  pawnBlue.id = "blue-player";
  document.getElementById('position-1').appendChild(pawnBlue);
  document.getElementById("blue-player").addEventListener("click", function(){movePlayer(diceNumber, "blue-player", turn)});

});

//============================ START ============================//


//============================ DICE FUNCTION ============================//

function rollDice() {
  const dice = [...document.querySelectorAll(".die-list")];
  dice.forEach(die => {
    toggleClasses(die);
    diceNumber = getRandomNumber(1, 6);
    die.dataset.roll = diceNumber;
  });
  console.log(`Dado: ${diceNumber}`);

  return diceNumber;
}

function toggleClasses(die) {
  die.classList.toggle("odd-roll");
  die.classList.toggle("even-roll");
}

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("button").addEventListener("click", rollDice);

//============================ DICE FUNCTION ============================//