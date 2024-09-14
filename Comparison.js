//Create a variable named firstFavNumb and store your favorite number
let firstFavNumb = 19;
//Create a variable named secondFavNumb and store your second favorite number
let secondFavNumb = 22;

//COMPARISON //

//Greater Than
console.log(firstFavNumb > secondFavNumb); //false
//Less Than
console.log(firstFavNumb < secondFavNumb); //true

// RELATIONAL //

//Greater Than or Equal to
console.log(firstFavNumb >= secondFavNumb); //false
//Less Than or Equal to
console.log(firstFavNumb <= secondFavNumb); //true
//Strict Equality (===)
console.log(firstFavNumb === secondFavNumb); //false
//Loose Equality (==)
console.log(firstFavNumb == secondFavNumb); //false
//Strict Inequality (!==)
console.log(firstFavNumb !== secondFavNumb); //true
//Loose Inequality (!=)
console.log(firstFavNumb != secondFavNumb); //true

 // LOGICAL OPERATORS //

 //AND
let x = 17;
let y = 19;
let z = 22;

 console.log(x < y && y < z); //true
 console.log(x > y && y > z); //false

//OR
let a = "Grateful";
let b = "conquer";
let c = "faith";

console.log(a === b || a === c); //true
console.log(a === b || b === c); //false

//NOT
let isBlack = true;
let isRed = false;

console.log(!isBlack); //false
console.log(!isRed); //true

console.log(!isBlack && isRed); //false
console.log(isBlack && !isRed); //true
console.log(isBlack || isRed); //true
console.log(!isBlack || isRed); //false
console.log(isBlack == isRed); //false
console.log(isBlack == !isRed); //true
