//variables set for length of password, selection based on criteria, and the criteria (uppcase, lowercase, number and special characters).
var length = '';
var selection = [];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var special = ['!', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '/', ';', ':', '<', '>', '=', '?', '@', '[', ']', '_', '{', '}', '|', '~',];



var generateBtn = document.querySelector("#generate");

function writePassword() {
  var prompts =  showPrompt(); 
  var passwordText = document.querySelector("#password");

    // will be true or false if follow the steps correctly and move on to generate password if true 
    if(prompts) {
    var finalpassword = generatePassword();
    passwordText.value = finalpassword;

    } else {
    passwordText.value=""; // if don't follow prompts correctly password will be blank

    }

}


//variables set for the password chosen and calculation of the length of password using the Math.random function. 
//Defined function here using for loop to create a random password using Math.random function
function generatePassword() {
  var password = '';
  for(var i = 0; i < length; i++) {
  var randomkey = Math.floor(Math.random() * selection.length); //use Math.floor to convert calculation into a whole number 
  password = password + selection[randomkey];

  }

return password;
}

// Defined function here using if statements to get the user to choose selection criteria which will be used to create password
// use parseInt to convert into a string and then get an integer to calculate length of password
function showPrompt() {
  selection = [];

  length = parseInt(prompt("How many characters would you like your password to be? Must be between 8 and 128 characters"));

    if(length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters. Please try again");  // To check if meet length condition first before other criteria
    return false;
    }
    if(confirm("Would you like your password to have lowercase letters?")) {
    selection = selection.concat(lowerCase); //used concat to combine strings

    }

    if(confirm("Would you like your password to have uppercase letters?")) {
    selection = selection.concat(upperCase); //used concat to combine strings

    }
    if(confirm("Would you like your password to have special characters?")) {
    selection = selection.concat(special); //used concat to combine strings

    }
    if(confirm("Would you like your password to have numbers?")) {
    selection = selection.concat(number); //used concat to combine strings

    }
return true;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




