// for of 
["","",""]
// [{},{},{}]
const arr = [10,20,30,40,50];
for(const num of arr){
console.log(num);
}

const greetings = "Hello World";
for(const greet of greetings){
    console.log(greet);
}

// Maps
const map = new Map();
map.set("name", "Hitesh");
map.set("course", "JavaScript");
map.set("website", "learncodeonline.in");

console.log(map);
for(const keyValue of map){
    console.log(keyValue); // [key, value]
} // output: ['name', 'Hitesh'] etc.

for(const [key, value] of map){
    console.log(`Key is: ${key}, Value is: ${value}`);
}

const myObj = {
    name: "Hitesh",
    course: "JavaScript",
    website: "learncodeonline.in"
};  

for(const key in myObj){
    console.log(`Key is: ${key}`, `Value is: ${myObj[key]}`);
} 
const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
for(const index in programmingLanguages){
    console.log(`Index is: ${index}`, `Value is: ${programmingLanguages[index]}`);
} 

