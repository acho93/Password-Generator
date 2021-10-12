// Assignment Code
var generateBtn = document.querySelector("#generate");
  console.log(generateBtn)
// Write password to the #password input

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specialCharacters = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", "<", ",", ">", ".", "?", "/"];


function questions () {
  var isValid = false;
  do {
    var length = Number(prompt("Between 8 and 128 characters, how many characters would you like your password to contain?"))
    console.log(length)

    var number = confirm("Do you want your password to include numbers?");
    console.log(number)

    var uppercase = confirm("Do you want your password to include uppercase letters?");
    console.log(uppercase)

    var lowercase = confirm("Do you want your password to include lowercase letters?");
    console.log(lowercase)

    var special = confirm("Do you want your password to include special characters?");
    console.log(special)

    var responses = {
    lenth: length,
    uppercase: uppercase,
    lowercase: lowercase,
    special: special
  }

  if((length < 8)||(length > 128))
  alert("Password length must be between 8 and 128.");
  else if((!number)&&(!uppercase)&&(!lowercase)&&(!special))
  alert("You must select at least one criteria.");
  else
  isValid = true;

} while(!isValid);
return responses;
}

function generatePassword(){
  console.log("Hello")

  var options = questions ();
  var possiblePassword = [];
  var finalPassword = "";


  if (options.number) {
    for (var i of numbers)
      possiblePassword.push(i);
  }
  if (options.uppercase) {
    for (var i of uppercaseLetters)
      possiblePassword.push(i);
  }
  if (options.lowercase) {
    for (var i of lowercaseLetters)
      possiblePassword.push(i);
  }
  if (options.special) {
    for (var i of specialCharacters)
      possiblePassword.push(i);
  }

  console.log(possiblePassword);

  for (var i=0; i<options.length; i++){
    finalPassword += possiblePassword(Math.floor(Math.random() * possiblePassword.length))
  }
  console.log(finalPassword);
  return finalPassword;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
