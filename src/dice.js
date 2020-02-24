// function rollDice() {
//     const dice = [...document.querySelectorAll(".die-list")];
//     let randomNumber;
//     dice.forEach(die => {
//       toggleClasses(die);
//       randomNumber = getRandomNumber(1, 6);
//       die.dataset.roll = randomNumber;
//     });
//     console.log(randomNumber);

//     return randomNumber;
//   }
  
//   function toggleClasses(die) {
//     die.classList.toggle("odd-roll");
//     die.classList.toggle("even-roll");
//   }
  
//   function getRandomNumber(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
  // document.getElementById("button").addEventListener("click", rollDice);
