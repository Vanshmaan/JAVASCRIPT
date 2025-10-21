const { use } = require("react");

const user = {
    username: "Hitesh",
    score: 100,

    welcomeMessage : function(){
        console.log(`Welcome ${this.username}, your score is ${this.score}`);
        console.log(this); // refers to the user object
    },
}

// this refers to current context

user.welcomeMessage; // no value printed because function is not called
user.welcomeMessage(); // Welcome Hitesh, your score is 100
user.username = "ChatGPT";
user.welcomeMessage(); // Welcome ChatGPT, your score is 100

console.log(this); // in global context, refers to global object (window in browsers, global in Node.js)

function chai(){
    let username = "Hitesh";
    console.log(this); // in function context, refers to global object many value comes
    console.log(this.username); // undefined because username is not a property of global object
}

const chai = () => {
    let username = "Hitesh";
    console.log(this);
    console.log(this.username); // undefined
} // in arrow function, this refers to the enclosing lexical context (global object here)

chai(); // global object



const addTwo = (num1,num2) => {
    return num1 + num2;
}
console.log(addTwo(5, 10)); // 15

const addTwo2 = (num1,num2) =>  num1 + num2;


const addTwo3 = (num1,num2) =>  ({username: "Hitesh"}); // returning object literal 
// we have to close object literal in parentheses to avoid confusion with function body

const myArray = [1, 2, 3, 4, 5];
