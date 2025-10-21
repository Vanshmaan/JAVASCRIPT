console.log(2>1); // true
console.log(2<1); // false
console.log("2" > 1); // true
console.log("02" > "2"); // false because in string comparison first character is compared

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false


// strict equality operator
console.log(1 === 1); // true
console.log(1 === "1"); // false

