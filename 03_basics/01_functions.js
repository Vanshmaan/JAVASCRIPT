function xyz(){
    console.log("H");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");   
}

xyz ; // function reference
xyz(); // function call / invocation
// H
// e
// l
// l
// o
function addTwoNumbers(num1, num2){
    const sum = num1 + num2;
    console.log("Sum is:", sum);
}

const result = addTwoNumbers(5, 7); // Sum is: 12
addTwoNumbers(3,"4"); // Sum is: 34
addTwoNumbers(3,null); // Sum is: 3
addTwoNumbers(); // Sum is: NaN

console.log("Result is:", result); // Result is: undefined // No return statement in function

function addTwoNumbersReturn(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const returnResult = addTwoNumbersReturn(10, 15);
console.log("Return Result is:", returnResult); // Return Result is: 25

function loginUserMessage(username = "Guest", message = "Welcome to the site"){
    return `Hello ${username}, ${message}!`;
} // default parameters
console.log(loginUserMessage("Hitesh", "Good to see you again")); // Hello Hitesh, Good to see you again!
console.log(loginUserMessage("Alice")); // Hello Alice, Welcome to the site!

function calculateCartPrice(num1){
    return num1;
}
console.log(calculateCartPrice(100)); // 100
console.log(calculateCartPrice()); // undefined
console.log(calculateCartPrice(100, 200, 300)); // 100 because only first argument is considered

function calculateCartPrice2(...prices){ // rest parameters
    console.log("Prices array:", prices);
}
calculateCartPrice2(100, 200, 300); // Prices array: [100, 200, 300]

function calculateCartPrice3(discount, ...prices){ // rest parameters with other parameters
    console.log("Discount:", discount);
    console.log("Prices array:", prices);
} 
calculateCartPrice3(10, 100, 200, 300);
// Discount: 10
// Prices array: [100, 200, 300]

const user = {
    username: "Hitesh",
    score: 100,
}

function handleObject(anyobject){
    console.log("Username is:", anyobject.username);
    console.log("Score is:", anyobject.score);
}

handleObject(user);
// Username is: Hitesh
// Score is: 100

const myNewArray = [1, 2, 3, 4, 5];
function handleArray(arr){
    console.log("Array elements are:");
    for(const element of arr){
        console.log(element);
    }
}
handleArray(myNewArray);
// Array elements are:
// 1    
// 2 ..