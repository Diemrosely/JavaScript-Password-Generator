
//Defining variables for elements using
var generatePasswordBtnEl = document.querySelector("#generateBtn");
var displayPasswordEl = document.querySelector("#password");

//Defining character array
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialValues = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', ':', '"', '<', '>', '?', '\', '/'];

//Defining the rest of the variables
var passwordLength = 0;
var numericValues = "false";
var upperCaseLetters = "false";
var lowerCaseLetters = "false";
var specialValuesChar = "false";
var newPassword = [];


//addEventListener method to call Generate Password Button element 
generatePasswordBtnEl.addEventListener("click", function () {
    event.preventDefault();
    userInput(); 
    inputArray = [];
    generateInputChoices();
    generatePassword();
   
});

//Function to get user input, prompts included
function userInput() {
    passwordLength = prompt("How many characters would you like in your password? Please choose a value between 8 and 128 ");
    numericValues = confirm("Does this password need numeric values? ");
    upperCaseLetters = confirm("Does this password need uppercase letters?");
    lowerCaseLetters = confirm("Does this password need lowercase letters?");
    specialValuesChar = confirm("Does this password need special characters?");
};

//Using concat to combine arrays based on user input
var inputArray = [];

function generateInputChoices() {
    if (upperCaseLetters == true)
        inputArray = inputArray.concat(upperCase);
    if (lowerCaseLetters == true)
        inputArray = inputArray.concat(lowerCase);
    if (numericValues == true)
        inputArray = inputArray.concat(numeric);
    if (specialValuesChar == true)
        inputArray = inputArray.concat(specialValues);
};

//Validation rule for meeting minimum requirements including minimum length and required characters
//Function to randomize password based on user input
function generatePassword() {
    if (inputArray.length < numeric.length || passwordLength < 8) {
        alert("Please select a value between 8-128 that includes at least lowercase, uppercase, numeric, and/or special characters")
    } else {
        for (i = 0; i < passwordLength; i++) {
            newPassword += inputArray[Math.floor(Math.random() * (inputArray.length - 1))];
        }
        displayPasswordEl.textContent = newPassword;
    };
    newPassword = [];
} 