const myArray = [10, 20, 30, 40, 50]; 
// In javascript arrays are resizable and can hold elements of different types

console.log("Array:", myArray); // [10, 20, 30, 40, 50]
console.log("Type of myArray:", typeof myArray); // object
console.log("Is myArray an Array?", Array.isArray(myArray)); // true
console.log("Length of myArray:", myArray.length); // 5

// Javascript array-copy-operations are shallow copies
// shallow copy means only the reference is copied for objects inside the array
// deep copy means the actual object is copied

// methods

const myarr2 = new Array(1,2,3); // Using Array constructor
console.log("myarr2:", myarr2); // [1, 2, 3]

myArray.push(60); // Add element at the end
console.log("After push:", myArray); // [10, 20, 30, 40, 50, 60]
myArray.pop(); // Remove element from the end
console.log("After pop:", myArray); // [10, 20, 30, 40, 50]

myArray.unshift(0); // Add element at the beginning
console.log("After unshift:", myArray); // [0, 10, 20, 30, 40, 50]
myArray.shift(); // Remove element from the beginning
console.log("After shift:", myArray); // [10, 20, 30, 40, 50]


console.log("Index of 30:", myArray.indexOf(30)); // 2
console.log("Includes 40?", myArray.includes(40)); // true
myArray.splice(2, 1); // Remove 1 element at index 2
console.log("After splice:", myArray); // [10, 20, 40, 50]  
myArray.splice(2, 0, 25, 30); // Add elements 25, 30 at index 2
console.log("After adding with splice:", myArray); // [10, 20, 25, 30, 40, 50]


const newArray = myArray.join(); // Join elements into a string
console.log("Joined Array:", newArray); // "10,20,25,30,40,50"


// slice and splice

const myn1 = myArray.slice(1,4); // Extract elements from index 1 to 3
console.log("Sliced Array:", myn1); // [20, 25, 30]

const myn2 = myArray.splice(1,3); // Remove 3 elements from index 1
console.log("Spliced Array:", myn2); // [20, 25, 30]
console.log("Array after splice:", myArray); // [10, 40, 50]

