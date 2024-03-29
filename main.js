// 1. Write Pseudocode for the project
// 2. Create an alert that contains a message saying "You have received this message because you have been chosen to open an important vault. Here is the secret combination."
// 3. Assign variables that contain results of calculations using arithmentic
// 4. Determine variable outcomes and mathematic process to produce outcome
// 5. Include comments in your code
// 6. Create a dialog box displaying vault codes and text by concatenating strings
// 7. Submit file with code to github 

const message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
// assigned variable 'message' to contain a string that reads "You have received this...."

const combo1 = 20 / 2;
// assigned combo1 to be equal to the outcome of 20/2
const combo2 = 30 + 10;
//assigned combo2 to be equal to the outcome of 30+10
const combo3 = 40 - 1;
//assigned combo3 to be equal to the outcome of 40-1

const message2 = "The comination for the lock is:";
//assigned message2 to be a string reading "The combination for the lock is:"


alert(`${message} ${message2} ${combo1} - ${combo2} - ${combo3}`);
// programmed an alert to display the vairables message, message2, combo1, combo2, and combo3 to read:
// "You have received this message because you have been chosen to open an important vault. Here is the 
// secret combination: The combination for the lock is: 10 - 40 - 39"

function validateForm() {
  let combo1input = document.getElementById("Combo1").value; //creates new variable based on user input
  let combo2input = document.getElementById("Combo2").value; //creates new variable based on user input
  let combo3input = document.getElementById("Combo3").value; //creates new variable based on user input
  if (combo1input != 10 || combo2input != 40 || combo3input != 39) { //checks new variables to make sure they are the correct numbers
    alert("A combination number is incorrect"); //alerts users if a number input is incorrect
    return false;
}else{
  event.preventDefault() //prevents page from reloading to index.html
  window.location = "./success.html" //redirects user to success page once numbers input have been verified as correct

}
}
