const accountId = 12345678; 
let accountEmail = "vansh@34gmail.com";
var accountPassword = "password1234";
accountCity = "New York";
let accountState; 
//accountId = 87654321; // Error: can't change
//console.log(accountState); // undefined
// IN PREVIOUS DAYS JAVASCRIPT DOESN'T KNOW ABOUT SCOPE 
// SO WE STARTED USING LET NOW FOR VARIABLES THAT CAN CHANGE AND VAR FOR VARIABLES THAT DON'T CHANGE
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);