//const codingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

// for each cannot return items from array
const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.filter((num) => {
   return  num > 4;
});
console.log(newNums); // [5,6,7,8,9,10]

const newNums2= [];
myNums.forEach((num) => {
    if(num > 4){
        newNums2.push(num);
    }});

const books = [
    {
        title: 'Book One' , genre : 'Fiction' , publish : 1981,edition:2004
    },
    {

    }
    ,{

    }
]
const userBooks = books.filter((bk) => bk.genre === 'Fiction' );
console.log(userBooks);
