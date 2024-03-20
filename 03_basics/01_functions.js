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
// console.log(loginUserMessage("Sreenu"))  // output : undefined just logged in

function calculatCartPrice(val1,val2, ...num1){
    return num1;
}

// console.log(calculatCartPrice(200,300,500, 2000));
// console.log(typeof calculatCartPrice);

const user = {
    username: "Sreenu",
    price : 199
}

function handleObject(anyobject)
{
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user); // it is accessing even out of thee scope also becaues of (closure concept)

 handleObject({
    username: "Sam",
    price:399
 })

 const mynewArray = [200,400,100,600]

 function returnSecondValue(getArray) {
    return getArray[1];
 }

//  console.log(returnSecondValue(mynewArray));

console.log(returnSecondValue([200,400,500,1000]));