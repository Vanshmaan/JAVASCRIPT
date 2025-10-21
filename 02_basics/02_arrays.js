const marvel_heroes = ["thor", "ironman", "spiderman", "hulk"];
const dc = ["batman", "superman", "flash", "aquaman"];

//marvel_heroes.push(dc); // Adding dc array as an element to marvel_heroes
//console.log("After pushing dc into marvel_heroes:", marvel_heroes);
// ["thor", "ironman", "spiderman", "hulk", ["batman", "superman", "flash", "aquaman"]]
// array inside array

marvel_heroes.concat(dc); // This does not modify marvel_heroes, returns a new array
const allHeroes = marvel_heroes.concat(dc); // Merging two arrays
console.log("All Heroes:", allHeroes);
// ["thor", "ironman", "spiderman", "hulk", "batman", "superman", "flash", "aquaman"]



const new_heroes = [...marvel_heroes, ...dc]; // Using spread operator to merge arrays
console.log("New Heroes using spread operator:", new_heroes);
// ["thor", "ironman", "spiderman", "hulk", "batman", "superman", "flash", "aquaman"]


const another_array = [1,2,3.[4,5,6],7,[6,7,[5,6]]] ; // Nested arrays
const real_another_array = another_array.flat(Infinity); // Flattening nested arrays
console.log("Flattened another_array:", real_another_array);
// [1, 2, 3, 4, 5, 6, 7, 6, 7, 5, 6]

const array_with_holes = [1,2,,4,5,,,7]; // Array with holes (undefined elements)
console.log("Array with holes:", array_with_holes); 

console.log(Array.isArray("Hello")); // false
console.log(Array.from("Hello")); // ['H', 'e', 'l', 'l', 'o']
console.log(Array.from({name : "Hitesh"})) ; // [undefined]

let score_1 = 200;
let score_2 = 400;
let score_3 = 600;
const scores_array = Array.of(score_1, score_2, score_3); // Creating array from individual elements
console.log("Scores Array:", scores_array); // [200, 400, 600]
