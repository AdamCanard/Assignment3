/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
const full = 40;
const half = 20;
const clicked = "clicked";
var dayCounter = 0;

let monBut = document.getElementById("monday");
monBut.addEventListener("click", addClass);

let tuesBut = document.getElementById("tuesday");
tuesBut.addEventListener("click", addClass);

let wedBut = document.getElementById("wednesday");
wedBut.addEventListener("click", addClass);

let thursBut = document.getElementById("thursday");
thursBut.addEventListener("click", addClass);

let friBut = document.getElementById("friday");
friBut.addEventListener("click", addClass);

const dayButtonList = [monBut, tuesBut, wedBut, thursBut, friBut];

let fullElement = document.getElementById("full");
fullElement.addEventListener("click", addClass);
fullElement.classList.add("clicked");

let halfElement = document.getElementById("half");
halfElement.addEventListener("click", addClass);

let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clear);

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function addClass(e) {
  if (e.target.id === "half") {
    e.target.classList.add(clicked);
    fullElement.classList.remove(clicked);
  } else if (e.target.id === "full") {
    e.target.classList.add(clicked);
    halfElement.classList.remove(clicked);
  } else {
    if (e.target.classList.contains(clicked)) {
      e.target.classList.remove(clicked);
      dayCounter--;
    } else {
      e.target.classList.add(clicked);
      dayCounter++;
    }
  }
  recalculate();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clear() {
  for (i in dayButtonList) {
    if (dayButtonList[i].classList.contains(clicked)) {
      dayButtonList[i].classList.remove(clicked);
      dayCounter--;
    }
  }
  recalculate();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function recalculate() {
  var cost = document.getElementById("calculated-cost");

  if (halfElement.classList.contains(clicked)) {
    currentCost = dayCounter * 20;
    calculate(cost, currentCost);
  }

  // when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
  else {
    currentCost = dayCounter * 35;
    calculate(cost, currentCost);
  }
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate(cost, currentCost) {
  cost.innerHTML = currentCost.toString();
}
