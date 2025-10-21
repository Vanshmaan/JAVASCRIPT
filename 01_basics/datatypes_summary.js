 // # Primitive
  // 7 types
    // 1. Number
    // 2. String
    // 3. Boolean
    // 4. Null
    // 5. Undefined
    // 6. Symbol to make unique identifiers
    // 7. BigInt

    // Javascript is dynamically typed language
    // Why ? Because we don't have to specify data types while declaring variables

    const score = 100; // Number
    const scoreValue = "100"; // String
    const isLoggedIn = false;
    const score_2 = 100.3; // Number


    const id = Symbol("123");
    const id2 = Symbol("123");
    console.log(id === id2); // false because symbols are unique    



// # Reference or Non-primitive
    // Object
    // Array
    // Functions


    const heroes = ["Shaktiman", "Naagraj", "Doga"]; // Array
    const myObj = { // Object
        name: "Vansh Maan",
        age: 19,
        isLoggedIn: false
    };

    const myfunction = function(){
        console.log("Hello World");
    }

console.log(typeof myfunction); // function
console.log(typeof heroes); // object






//  Stack(primitive) vs Heap(reference/ non-primitive  )

let myyoutubename = "Vansh Maan"; // stored in stack
let anothername = myyoutubename; // copy the value from stack to stack
anothername = "Code with Vansh"; // changing anothername doesn't change myyoutubename
console.log(myyoutubename); // Vansh Maan
console.log(anothername); // Code with Vansh

let userOne = {
    name: "Vansh Maan",
    age: 19
};

let userTwo = userOne; // copy the reference from stack to stack
userTwo.name = "Code with Vansh"; // changing userTwo also changes userOne
console.log(userOne.name); // Code with Vansh
console.log(userTwo.name); // Code with Vansh
