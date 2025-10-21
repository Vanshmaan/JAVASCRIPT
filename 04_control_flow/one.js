// Control flow is the order in which individual statements, instructions, or function calls are executed or evaluated.

const isUserLoggedIn = true;

if(isUserLoggedIn){

}
//<,><=
2 == "2" // true
2 === "2" // false // because strict equality checks for type as well

const balance = 1000;
if(balance >0) console.log("You can spend money"); //Implicit Scope
else console.log("You cannot spend money");

// nesting if-else

const userLoggedIn = true;
const debitCard = true;
if(userLoggedIn && debitCard){
    console.log("You can purchase");
} else {
    console.log("You cannot purchase");
}
// switch case
const country = "India";
switch(country){
    case "India":
        console.log("Namaste");
        break;
    case "USA":
        console.log("Hello");
        break;
    default:
        console.log("Welcome");
}

s