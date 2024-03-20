// Immediately Invoked Function Expression (IIFE)

// this is named IIFE

(function chai() {
    console.log(`DB CONNECTED`);
})();

// () ->first one is declaration and () -> second one is execution

// chai()


// This is unnamed IIFE

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
}) ("sreenu")
 