// Assignment Code
var generateBtn = document.querySelector("#generate");
  console.log(generateBtn)
// Write password to the #password input

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function generatePassword() {
  console.log("Hello")

  var length = Number(prompt("What is the length of your password?"))
    console.log(length)

  if (length < 8 || length > 128){
    alert("Password length must be between 8 and 128.")
    return;
  }

  var number = confirm("Do you want your password to include numbers?")
    console.log(number)

  //do a series of these for lowercase, uppercase, special characters (create arrays for each variable)

  // if (number === false && lowercase === false && uppercase === false){
  //   alert("You must select at least one criteria.")
  //   return;
  // }

  var random = Math.random()*numbers.length
    console.log(random)

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
