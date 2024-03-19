// const tinderUser = new Object()   // singelton object

const tinderUser  = {}  // Non sinleton object

tinderUser.id = "123abc"
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "sunny@gmail.com",
    fullname: {
        userfullname : {
            firstname : "Sreenu",
            lastname : "Sunny"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2: "b"}
const obj2 = {3 : "a", 4 : "b"}
const obj4 = {5:"a",6:"b"}

// const obj3 = {obj1,obj2};

// const obj3 = Object.assign({},obj1,obj2);

const obj3 = {...obj1,...obj2};
// console.log(obj3);

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"i@gmail.com"
    },
    {
        id:2,
        email:"j@gmail.com"
    }

]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
      
    courseName : "JavaScript",
    price : "999",
    courseInstructor : "Sreenu"
}

const {courseInstructor: Instructor} = course  // Destructure

// console.log(courseInstructor);

console.log(Instructor);


//// Json format *****

// {
//     "name": "sreenu",
//     "coursename": "js in hindi",
//     "price" : "free"
// }


[
    {},
    {},
    {}
]

