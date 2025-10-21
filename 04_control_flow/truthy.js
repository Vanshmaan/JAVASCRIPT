const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Does not have user email");
}

// falsy values: false, 0, "", null, undefined, NaN,-0,BigInt(0),0n
//truthy values : everything else "0" ,true,[],{},function(){}, etc

// Nullish Coalescing Operator (??) : null umdefined;

let val1;
val1 = 5 ?? 10; // 5 because val1 is not null or undefined 
// this is used to provide default value only when the left side is null or undefined
val1 = null ?? 10; // 10
val1 = undefined ?? 10; // 10

// Ternary Operator
const age = 17;
const canVote = age >= 18 ? "Can Vote" : "Cannot Vote";
console.log(canVote); // Cannot Vote
