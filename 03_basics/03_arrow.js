const user = {
    username: "Sreenu",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  // prints {}

// function chai(){
//     let username = "Sreenu"
//     console.log(this.username);
// }
// chai();

// ***** this keyword won't work in functions it works only in objects

const chai = () => {
    let username = "sreenu"
    // console.log(this.username)
    // console.log(this);
}

//  chai()

// ******** Basic syntax -> () => {}  of arrow functions


// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// arrow functions can also used in different style called "Implicit return"

// If you use curly({}) braces you have to write return keyword and if you are using just () then no need to use return keyword



// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) =>  (num1 + num2);

const addTwo = (num1, num2) =>  ({username:"sreenu"});


console.log(addTwo(2, 3));

const myArray = [1,5,3,7,8]

myArray.forEach(myArray)

