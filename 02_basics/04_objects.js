const tinderUser =  new Object(); // singleton object

// const tinderUser = {}; non-singleton object 
tinderUser.id = "123abc";
tinderUser.name = "Hitesh";
tinderUser.isLoggedIn = false;

console.log(tinderUser); // { id: '123abc', name: 'Hitesh', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname : "Hitesh Choudhary"
    }
}
console.log(regularUser.fullname.userFullname); // Hitesh Choudhary

const obj1 = {100 : "one hundred"}; // key as number
const ob2 = {200 : "two hundred"};

const obj3 = {...obj1, ...ob2}; // merging objects using spread operator
console.log(obj3); // { '100': 'one hundred', '200': 'two hundred' }

const obj4 = Object.assign({}, obj1, ob2); // merging objects using Object.assign
console.log(obj4); // { '100': 'one hundred', '200': 'two hundred' }


const users = [
    {
        id :1,
        email : "hitesh@gmail.com"
    },
    {

    }
    ,{

    }
]

users[1].email
console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Hitesh', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Hitesh' ], [ 'isLoggedIn', false ] ]


const course = {
    courseName : "Javascript",
    price : 999,
    courseInstructor : "Hitesh"
}
//
//course.courseInstructor
const {courseInstructor} = course; // destructuring
console.log(courseInstructor); // Hitesh

const {courseInstructor : instructor} = course; // destructuring with alias
console.log(instructor); // Hitesh

const navbar = ({company}) => {

}

navbar(company = "hitesh")

// {
    //"name" : "hitesh",
   // "coursename" : "Javascript",
    //"price" : "free"
 //}

 