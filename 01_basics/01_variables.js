const accountId = 144453;
let accountEmail = "sreenu@google.com"
var accountPassword = "12345"
accountCity = "Kurnool"
let accountState

// accountId = 2
accountEmail = "hchc@hc.com"
accountPassword = "21121"
accountCity = "Hyderabad"
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])