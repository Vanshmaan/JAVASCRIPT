"hello" + "world"; // "helloworld"
const name  = "Vansh";
const repoCount = 50;

// String concatenation
console.log("Hello " + name + ", you have " + repoCount + " repositories"); // Hello Vansh, you have 50 repositories

// String interpolation (Template literals)
console.log(`Hello ${name}, you have ${repoCount} repositories`); // Hello Vansh, you have 50 repositories

const gameName = new String("Chess"); // String object
console.log(typeof gameName); // object
console.log(gameName); // [String: 'Chess']

console.log(gameName[0]); // C
console.log(gameName.length); // 5

console.log(gameName.__proto__); // String methods
 console.log(gameName.toUpperCase()); // CHESS
 console.log(gameName.toLowerCase()); // chess
 console.log(gameName.charAt(2)); // e
 console.log(gameName.indexOf("ess")); // 2
    console.log(gameName.includes("ch")); // false (case-sensitive)

const newString = gameName.substring(1,4);
console.log(newString); // hes

const anothername = gameName.slice(1,4);
console.log(anothername); // hes

const yetanothername = gameName.slice(-4,-1);
console.log(yetanothername); // hes

const greeting = "   Hello World   ";
console.log(greeting.trim()); // "Hello World"
console.log(greeting.trimStart()); // "Hello World   "
console.log(greeting.trimEnd()); // "   Hello World"

const message = "Hello World, welcome to the world of JavaScript";
console.log(message.replace("World", "Universe")); // Hello Universe, welcome to the world of JavaScript
console.log(message.replaceAll("world", "universe")); // Hello World, welcome to the universe of JavaScript


console.log(message.split(" ")); // [ 'Hello', 'World,', 'welcome', 'to', 'the', 'world', 'of', 'JavaScript' ]

