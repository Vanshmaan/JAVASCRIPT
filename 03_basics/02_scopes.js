let a = 300

if(true){let a = 10;
const b = 20;
var c = 30;
}

console.log(a); // 300 // let is block-scoped
console.log(b); // ReferenceError: b is not defined
console.log(c); // 30 // var is function-scoped or globally-scoped

function one() {
    const username = "Hitesh";

    function two() {
        const website = "learncodeonline.in";
        console.log(username); // Hitesh // inner function can access outer function's variables
    }
    console.log(website); // ReferenceError: website is not defined
    two(); // calling inner function // hitesh
}

one();
