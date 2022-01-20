// Assignment code here


function generatePassword() {
  var length = Number(window.prompt("How many charactors do you want?"));
  
  //check if number is between 8 and 128
  var special = confirm("do you want special charactors? Ok for yes cancel for no");
  

  //confirm if user wants special charactors
  var upcase = confirm("Do you want uppercase letters? Ok for yes cancel for no");
  
  //confirm if user wants  uppercase charactors
  var lowcase = confirm("Do you want lowercase letters? Ok for yes click cancel for no");
 
  //confirm if user wants lowercase charactors
  var numeric = confirm("Do you want numeric charactors");
  
  //confirm if user wants numeric charactors
  var truecount = 0;
  
  //create if statement to check which charactors user wants 
  if (upcase) {
    truecount++
    

  }
  if (lowcase) {
    truecount++


  }
  if (special) {
    truecount++
   
   
  }
  if (numeric) {
    truecount++

  }

  var realcount = Math.floor(length / truecount);

  
  var remainder = length - realcount * truecount
  //                8     -   2   *    3
  
  var specialchar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  var upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowchar = "abcdefghijklmnopqrstuvwxyz"
  var numchar = "1234567890"
  var password = ""
  for ( var i = 0; i < realcount; i++ ) {
   
   if (special) password += specialchar.charAt(Math.floor(Math.random() * specialchar.length));
   if (upcase) password += upperchar.charAt(Math.floor(Math.random() * upperchar.length));
   if (lowcase) password += lowchar.charAt(Math.floor(Math.random() * lowchar.length));
   if (numeric) password += numchar.charAt(Math.floor(Math.random() * numchar.length));
}

for ( var i = 0; i < remainder; i++) {

 if (special) password += specialchar.charAt(Math.floor(Math.random() * specialchar.length)); 
 else if (upcase) password += upperchar.charAt(Math.floor(Math.random() * upperchar.length));
 else if (lowcase) password += lowchar.charAt(Math.floor(Math.random() * lowchar.length));
 else if (numeric) password += numchar.charAt(Math.floor(Math.random() * numchar.length));
}

return password;

};


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
