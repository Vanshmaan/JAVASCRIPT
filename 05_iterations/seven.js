const myNums = [1,2,3]
const newNums = myNums.map((num) => {return num + 10})
console.log(newNums);

// chaining
const newNums2 = myNums
                       .map((num) => num * 10)
                       .map((num) => num + 1)
console.log(newNums2) // [11,21,31];
const newNums3 = myNums
                       .map((num) => num * 10)
                       .map((num) => num + 1)
                       .filter((num) => num >= 40);

