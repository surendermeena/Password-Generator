const inputSlider = document.querySelector("[data-lengthSlider]");
// to fetch custom attribute from HTML Use --> [] <-- data-lengthSlider;

const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copyMsg]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generate-button");
const allCheckBox = document.querySelector("input[type=checkbox]");
const symbolString = "~!@#$%^&*()_+={}[]:";

let password = "";
let passwordLength = 10;
let checkCount = 1;
// set strength color - Gray;

handleSlider();

// sets password length according to slider
function handleSlider() {
  inputSlider.value = passwordLength;
  lengthDisplay.innerText = passwordLength;
}

function setIndicator(color) {
  indicator.style.backgroundColor = color;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
  return getRandomInteger(0, 10);
}

function generateLowerCase() {
  return String.fromCharCode(getRandomInteger(97, 124));
}

function generateUpperCase() {
  return String.fromCharCode(getRandomInteger(65, 91));
}

function generateSymbol() {
    const randNum = getRandomInteger(0, (symbolString.length + 1));
    
  
    return symbolString.charAt[randNum]
}

// not working right now may be reviewed in Next session.--->
console.log(generateSymbol());


function calcStrength(){
    
}