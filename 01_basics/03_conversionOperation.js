let score = "33abc"

log(typeof score); // string

let valueInNumber = Number(score); // conversion
console.log(valueInNumber); // NaN

let score_2 = null;

let valueInNumber_2 = Number(score_2);
console.log(valueInNumber_2); // 0

let score_3 = "45";
let valueInNumber_3 = Number(score_3);  
console.log(valueInNumber_3); // 45

let isLoggedIn = false;
let booleanToNumber = Number(isLoggedIn);
console.log(booleanToNumber); // 0

let isLoggedIn_2 = 1;
let booleanToNumber_2 = Boolean(isLoggedIn_2);
console.log(booleanToNumber_2); // true

let namee = ""
let nameeToBoolean = Boolean(namee);
console.log(nameeToBoolean); // false


//////////////////// OPERATIONS ////////////////////

let value = 2;
let negValue = -value;
console.log(negValue); // -2

console.log(2**2); // 4

let str = "Hello"
let str2 = "World"

let fullStr = str + " " + str2;
console.log(fullStr); // Hello World

console.log("2" + 2); // 22
console.log(2 + "2"); // 22
console.log("2" + "2"); // 22
console.log("2" + 2 + 2); // 222
console.log(2 + 2 + "2"); // 42


console.log(+true); // 1
console.log(+""); // 0
let num1,num2,num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1,num2,num3); // 4 4 4

let gameCounter = 100;
gameCounter++;
console.log(gameCounter); //101

++gameCounter;
console.log(gameCounter); // 102


