 let a = 300

// {} -> scope called

if (true) {
    let a = 10
    const b = 20
    var c = 30
    // console.log("INNER: ",a);
}

 


// console.log(a); // it is giving error
// console.log(b); // it is also giving error
// console.log(c); // but is printing output 



function one() {
    const username = "Sreenu"

    function two() {
        const website = "Youtube"
        console.log(username);
    }

    // console.log(website);

    // two() 
}

// one()

if(true) {
    const username = "Sreenu"

    if(username === "Sreenu") {
        const  website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);


//  +++++++++++++ Interesting concept ++++++++++++++

console.log(addOne(5));

function addOne(num) {
    return num + 1;
}


// ***** Below is called function but for sometimes it is called as expressions

console.log(addTwo(5));

const addTwo = function(num) {
    return num + 2
}

// addTwo(5);

