const score = 100;

const balance = new Number(500);

console.log(typeof score); // number
console.log(typeof balance); // object

console.log(balance.toString()); // "500"
console.log(balance.toFixed(2)); // "500.00"


const otherNumber = 123.4567;
console.log(otherNumber.toFixed(2)); // "123.46"
console.log(otherNumber.toPrecision(4)); // "123.5"
console.log(Number.isInteger(score)); // true
console.log(Number.isInteger(otherNumber)); // false

const hundreds = 100000.0;
console.log(hundreds.toLocaleString('en-IN')); // "1,00,000.00"

// ++++++++++Math Operations 

console.log(Math); // 500
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.8)); // 4
console.log(Math.min(1, 3, -5, 6, 2));
console.log(Math.sqrt(64)); // 8
console.log(Math.pow(2, 5)); // 32
console.log(Math.random()); // Random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10

const min = 10;
const max = 20;
const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInRange); // Random number between 10 and 20