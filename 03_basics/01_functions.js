// console.log("S");
// console.log("R");
// console.log("E");
// console.log("E");
// console.log("U");

function sayMyName() {

    console.log("S");
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("U");
}

// sayMyName ->  Refernce
// sayMyName() -> execution

// sayMyName();

// function add2Numbers(number1,number2) {
//     console.log(number1 + number2)
// }

// const result = add2Numbers(3,5) // will get undefined

function add2Numbers(number1,number2) {
    // let result = number1 + number2;
    // return result;

    return number1 + number2
}

const result = add2Numbers(3,5);

// console.log("Result: ", result);

// add2Numbers(3,4);
// add2Numbers(3,null);


function loginUserMessage(username) {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("sreenu"))
console.log(loginUserMessage())  // output : undefined just logged in
