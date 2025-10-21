// singleton

 // when we declare as literals no singleton is created
 // why ? because each time we declare an object literal a new object is created in memory

 // object literal

 const mySym = Symbol("key1");

 const Jsuser = {
    name : "Hitesh",
    "FULL name" : "Hitesh Choudhary",
    age : 24,
    [mySym] : "mykey1", // symbol as key
    location : "India",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"]
 }

    console.log(Jsuser["name"]); // Hitesh
    console.log(Jsuser["FULL name"]); // Hitesh Choudhary // not by dot notation because of space in key
    console.log(Jsuser.mySym); // mykey1
    console.log(typeof Jsuser.mySym); // string
    console.log(Jsuser["mySym"]); // mykey1
    console.log(typeof Jsuser[mySym]); // Symbol

    Jsuser.email = "hitesh@chatgpt.com"; // updating value
    //Object.freeze(Jsuser); // freezing the object to prevent further modifications
    Jsuser.age = 25; // will not update because object is frozen
    console.log(Jsuser.age); // 24
    console.log(Jsuser); // {name: 'Hitesh', FULL name: 'Hitesh Choudhary', age: 24, location: 'India', email: 'hitesh@chatgpt.com ', isLoggedIn: false, lastLoginDays: Array(2)}


    Jsuser.greeting = function(){ // method inside object
        console.log(`Hello ${this.name} ! Welcome back.`); // using this to access object properties);
    }

    console.log(Jsuser.greeting()); // Hello Hitesh ! Welcome back.
    

  

