console.log("Hello World!\n==========\n");

// Exercise 1

let favoriteNumber = 4;

let guessNumber = prompt("What is my favorite number?");

if (guessNumber < favoriteNumber) {
  console.log("Too low.");
} else if (guessNumber > favoriteNumber) {
  console.log("Too high.");
} else if (guessNumber == favoriteNumber) {
  console.log("Ding Ding Ding!");
}
 
// Exercise 2

let birthMonth = prompt("Please enter your birth month.");

switch (birthMonth.toLowerCase()) {
  case "december":
  case "january":
  case "february":
    console.log("You were born during winter!");
    break;
  case "march":
  case "april":
  case "may":
    console.log("You were born during spring!");
    break;
  case "june":
  case "july":
  case "august":
    console.log("You were born during summer!");
    break;
  case "september":
  case "october":
  case "november":
    console.log("You were born during autumn!");
    break;
    default:
      console.log("Hmm, that one's a mystery to me!");
}

// Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
  }


switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
  }

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
  }



console.log(`Product: ${size} ${color} ${type}`);