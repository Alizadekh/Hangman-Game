// const verbParts = document.querySelector(".verb-zone");
// const desc = document.querySelector("#desc");
// var objectArray = [
//  { table: "Furniture piece for dining or working." },
//   { car: "Vehicle for transportation." },
//   { dog: "Loyal animal kept as a pet." },
//   { phone: "Device used for communication." },
//   { book: "Printed publication for reading." },
//   { bird: "Flying animal with feathers." },
//   { bag: "Item used for carrying belongings." },
//   { house: "Residence or dwelling." },
//   { apple: "Edible fruit typically red or green." },
//   { television: "Device for displaying images." },
//   { computer: "Device for processing data." },
//   { clock: "Device for measuring time." },
//   { pen: "Writing instrument." },
//   { bed: "Furniture for sleeping." },
//   { shoe: "Footwear." },
//   { fish: "Aquatic animal." },
//   { glasses: "Vision aid." },
//   { meal: "Prepared food." },
//   { plate: "Dish for serving food." },
//   { tree: "Plant with branches and leaves." },
//   { chair: "Seat furniture." },
//   { mouse: "Computer input device." },
//   { fork: "Eating utensil." },
//   { cup: "Container for beverages." },
//   { cage: "Enclosure for birds." },
//   { towel: "Absorbent cloth." },
//   { cat: "Domesticated feline." },
//   { sock: "Foot covering." },
//   { clothing: "Garments." },
//   { document: "Record or paper." },
//   { key: "Lock opening tool." },
//   { shoe: "Footwear." },
//   { glove: "Hand covering." },
//   { radio: "Sound broadcasting device." },
//   { blanket: "Bed covering." },
//   { mirror: "Reflective surface." },
//   { clock: "Device for measuring time." },
//   { phone: "Device used for communication." },
//   { clothing: "Garments." },
//   { sock: "Foot covering." },
//   { chair: "Seat furniture." },
//   { key: "Lock opening tool." },
//   { blanket: "Bed covering." },
//   { mirror: "Reflective surface." },
//   { towel: "Absorbent cloth." },
//   { clothing: "Garments." },
//   { sock: "Foot covering." },
// ];
// var transformedArray = objectArray.map(function (item) {
//   var key = Object.keys(item)[0].toLowerCase();
//   var value = Object.values(item)[0];
//   return { verb: key, value: value };
// });
// // console.log(transformedArray);

// // console.log(objectArray.length);

// let number = Math.floor(Math.random() * 100) + 1;
// desc.textContent = transformedArray[number].value;

// let verbLength = transformedArray[number].verb.length;
// let makeWord = function () {
//   console.log(verbLength);
//   for (let i = 0; i < verbLength; i++) {
//     verbParts.innerHTML += `
//     <div class="letter"><span></span></div>
//     `;
//   }
// };
// makeWord();

// const verbPart = document.querySelectorAll(".letter span");
// const message = document.querySelector(".message p");
// const stat = document.querySelector(".statistic p span");
// const img = document.querySelector(".right img");

// let falseCount = 0;
// let correctCount = 0;
// let gameEnded = false;
// // let correct = 0;
// let attemp = verbLength + 10;
// stat.textContent = attemp;
// document.addEventListener("keypress", function (e) {
//   if (gameEnded) {
//     return;
//   }
//   function findLetterIndexes(word, letter) {
//     var indexes = [];
//     for (var i = 0; i < word.length; i++) {
//       if (word[i] === letter) {
//         indexes.push(i);
//       }
//     }
//     return indexes;
//   }
//   var keyPressed = e.key;
//   var letterIndexes = findLetterIndexes(
//     transformedArray[number].verb,
//     keyPressed
//   );
//   if (letterIndexes.length === 0) {
//     message.textContent = "Oops, wrong!";
//     message.style.color = "red";
//     attemp--;
//     stat.textContent = attemp;
//     falseCount = falseCount + 1;
//     img.src = `./img/hangman-${falseCount}.svg`;
//   } else {
//     message.textContent = "Wow, correct!";
//     message.style.color = "green";
//     attemp--;
//     letterIndexes.forEach(function (index) {
//       verbPart[index].textContent = keyPressed;
//     });
//     stat.textContent = attemp;
//     falseCount = falseCount - 1;
//     img.src = `./img/hangman-${falseCount}.svg`;
//     console.log(correctCount);
//     if (correctCount == transformedArray[number].verb.length) {
//       message.textContent = "You are Winner! ";
//       gameEnded = true;
//       document.removeEventListener("keypress", this);
//     }
//   }
//   if (falseCount == 6) {
//     message.textContent = "You Lose!";
//     gameEnded = true;
//     document.removeEventListener("keypress", this);
//   }
// });

const verbParts = document.querySelector(".verb-zone");
const desc = document.querySelector("#desc");
const message = document.querySelector(".message p");
const stat = document.querySelector(".statistic p span");
const img = document.querySelector(".right img");

const objectArray = [
  { table: "Furniture piece for dining or working." },
  { car: "Vehicle for transportation." },
  { dog: "Loyal animal kept as a pet." },
  { phone: "Device used for communication." },
  { book: "Printed publication for reading." },
  { bird: "Flying animal with feathers." },
  { bag: "Item used for carrying belongings." },
  { house: "Residence or dwelling." },
  { apple: "Edible fruit typically red or green." },
  { television: "Device for displaying images." },
  { computer: "Device for processing data." },
  { clock: "Device for measuring time." },
  { pen: "Writing instrument." },
  { bed: "Furniture for sleeping." },
  { shoe: "Footwear." },
  { fish: "Aquatic animal." },
  { glasses: "Vision aid." },
  { meal: "Prepared food." },
  { plate: "Dish for serving food." },
  { tree: "Plant with branches and leaves." },
  { chair: "Seat furniture." },
  { mouse: "Computer input device." },
  { fork: "Eating utensil." },
  { cup: "Container for beverages." },
  { cage: "Enclosure for birds." },
  { towel: "Absorbent cloth." },
  { cat: "Domesticated feline." },
  { sock: "Foot covering." },
  { clothing: "Garments." },
  { document: "Record or paper." },
  { key: "Lock opening tool." },
  { shoe: "Footwear." },
  { glove: "Hand covering." },
  { radio: "Sound broadcasting device." },
  { blanket: "Bed covering." },
  { mirror: "Reflective surface." },
  { clock: "Device for measuring time." },
  { phone: "Device used for communication." },
  { clothing: "Garments." },
  { sock: "Foot covering." },
  { chair: "Seat furniture." },
  { key: "Lock opening tool." },
  { blanket: "Bed covering." },
  { mirror: "Reflective surface." },
  { towel: "Absorbent cloth." },
  { clothing: "Garments." },
  { sock: "Foot covering." },
];

const transformedArray = objectArray.map((item) => {
  const key = Object.keys(item)[0].toLowerCase();
  const value = Object.values(item)[0];
  return { verb: key, value: value };
});

let number;
let verbLength;
let falseCount = 0;
let correctCount = 0;
let gameEnded = false;

function initializeGame() {
  number = Math.floor(Math.random() * transformedArray.length);
  desc.textContent = transformedArray[number].value;
  verbLength = transformedArray[number].verb.length;
  stat.textContent = verbLength + 10;
  falseCount = 0;
  correctCount = 0;
  gameEnded = false;
  message.textContent = "";
  img.src = `./img/hangman-0.svg`;
  renderVerbParts();
}

function renderVerbParts() {
  verbParts.innerHTML = "";
  for (let i = 0; i < verbLength; i++) {
    verbParts.innerHTML += `<div class="letter"><span></span></div>`;
  }
}

function checkLetter(keyPressed) {
  if (gameEnded) return;

  const letterIndexes = findLetterIndexes(
    transformedArray[number].verb,
    keyPressed
  );

  if (letterIndexes.length === 0) {
    handleWrongGuess();
  } else {
    handleCorrectGuess(keyPressed, letterIndexes);
  }

  updateGameStatus();
}

function findLetterIndexes(word, letter) {
  const indexes = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      indexes.push(i);
    }
  }
  return indexes;
}

function handleWrongGuess() {
  message.textContent = "Oops, wrong!";
  message.style.color = "red";
  stat.textContent = parseInt(stat.textContent) - 1;
  falseCount++;
  img.src = `./img/hangman-${falseCount}.svg`;

  if (falseCount === 6) {
    endGame("You Lose!");
  }
}

function handleCorrectGuess(keyPressed, letterIndexes) {
  message.textContent = "Wow, correct!";
  message.style.color = "green";
  stat.textContent = parseInt(stat.textContent) - 1;

  letterIndexes.forEach((index) => {
    verbParts.querySelectorAll(".letter span")[index].textContent = keyPressed;
  });
  falseCount--;
  correctCount += letterIndexes.length;
  if (falseCount < 0) {
    falseCount++;
    img.src = `./img/hangman-0.svg`;
  } else {
    img.src = `./img/hangman-${falseCount}.svg`;
  }

  if (correctCount === verbLength) {
    endGame("You are Winner!");
  }
}

function updateGameStatus() {
  if (parseInt(stat.textContent) === 0) {
    endGame("You Lose!");
  }
}

function endGame(messageText) {
  message.textContent = messageText;
  gameEnded = true;
}

document.addEventListener("keypress", function (e) {
  const keyPressed = e.key.toLowerCase();
  if (/[a-z]/.test(keyPressed)) {
    checkLetter(keyPressed);
  }
});

initializeGame();
