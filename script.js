// DOM Elements
const passwordEl = document.getElementById('password');
const generateEl = document.getElementById('generate');
const submitEl = document.getElementById('submit');
const upperCaseEl = document.getElementById('upperCase');
const lowerCaseEl = document.getElementById('lowerCase');
const numbersEl = document.getElementById('numbers');
const specialCharEl = document.getElementById('specialChar');
const passwordLengthEl = document.getElementById('passwordLength');

const randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  specialChar: randomSChar,
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

/* Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} */
generateEl.addEventListener("click", () => {
    const criteriaSect = document.getElementById('criteria');
    if (criteriaSect.style.display !== 'block') {
        criteriaSect.style.display = 'block' 
    }
    else {
        criteriaSect.style.display = "none";
    }
});
// Add event listener to generate button
submitEl.addEventListener("click", () =>  {
  const length = +passwordLengthEl.value;
  const checkLower = lowerCaseEl.checked;
  const checkUpper = upperCaseEl.checked;
  const checkNumbers = numbersEl.checked;
  const checkSpecialChar = specialCharEl.checked;

  passwordEl.innerText = generatePassword(checkLower, checkUpper, checkNumbers, checkSpecialChar, length)
});

// Generate Password Function
function generatePassword(lower, upper, number, specialChar, length) {

  let generatedPassword = '';

  const typesCount = lower + upper + number + specialChar; 

  console.log(typesCount);

  const typesArr = [{lower}, {upper}, {number}, {specialChar}].filter
  (item => Object.values(item)[0]);

  console.log(typesArr);

  if(typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log(funcName)
      generatedPassword += randomFunc[funcName]();
    })
  }

  const finalPassword = generatedPassword.slice(0, length);
  
  return finalPassword;
}

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomSChar() {
  const symbol = "#$%\"&!'()*+,-./:;<=>?@[]^_`{|}~\\"
  return symbol[Math.floor(Math.random() * symbol.length)];
}



