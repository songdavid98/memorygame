const gameContainer = document.getElementById("game");
const scoreElement = document.getElementById("score");
const activeCardsElement = document.getElementById("activeCards");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  
  let card = event.target;
  // do nothing is the card is active or completed
  if ( card.classList.length > 1 ) {
    console.log("do nothing");
    return;
  }
  if ( activeCards >= 2 ) {
    console.log("do nothing");
    return;
  }
  
  card.style.backgroundColor = card.classList;
  card.classList.add("active");
  if (activeCards == 0) {
    activeCards++;
    activeCardHolder = card;
  }
  else if (activeCards == 1) {
    activeCards++;
    // if colors match, add class completed and colors stay up.
    if ( card.style.backgroundColor == activeCardHolder.style.backgroundColor ) {
      card.classList.add("completed");
      activeCardHolder.classList.add("completed");
      activeCards = 0;
    }
    
    // else , set cards back facedown
    else {
      function flipDownActiveCards() {
        flipDown2Cards( activeCardHolder, card);
      }
      setTimeout( flipDownActiveCards, 1000 );
    }
  }
  
  score++;
  scoreElement.innerText = score;
  activeCardsElement.innerText = activeCards;
}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */

let score = 0;
let activeCards = 0;
let activeCardHolder = 0;

function flipDown2Cards( element1, element2) {
  console.log("flipping down");
  element1.style.backgroundColor = "white";
  element2.style.backgroundColor = "white";
  element1.classList.remove("active");
  element2.classList.remove("active");
  console.log(element1);
  console.log(element2);
  activeCards = 0;
}