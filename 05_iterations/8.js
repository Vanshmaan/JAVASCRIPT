const myNums = [1,2,3];

const myTotal = myNums.reduce(function(acc,curVal){
    return acc + curVal
},0)
console.log(myTotal)
