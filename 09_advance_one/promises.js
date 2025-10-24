const promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async Task is Complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Cosumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"CHai",
            email:"vansh@gmail.com"
        })
    },1000)
})

PromiseThree.then(function(user){
    console.log(user)
})

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Hitesh",password:"123"})
        }
        else{
            reject('ERROR:SOMETHING WENT WRONG')
        }
    },1000)
})
 PromiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("Finally done!!"
    )
});

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }
        else{
            reject('ERROR:SOMETHING WENT WRONG')
        }
    },1000)
});

async function consumePromiseFive(){
    try{
   const response =  await promiseFive
   console.log(response);
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive()

/*async function getAllUsers(){
   try{ const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
}catch(error){
    console.log("Error",error);
}
}

getAllUsers(); */

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("Error");
})