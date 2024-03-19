// Singleton

//Object.create ** this method can built by using constructor


//Object literals
const JsUser = {
    name: "Sreenu",  // Key : value
    "full name" : "Srinivasulu",
    age: 18,
    location: "Kurnool",
    email : "Sreenu@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","saturday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);

JsUser.email = "Sreenu@gmail.com";

// console.log(JsUser.email);

// Object.freeze(JsUser);  // freeze ho gaya

JsUser.email = "abc@chatgpt.com";

// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greeting2 = function() {
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());