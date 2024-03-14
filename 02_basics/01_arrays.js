// array


const myArr = [0,1,2,3,4,5] // mix of data type elements
const myHeros = ["Sreenu","Shaktimann"];

const myarr2 = new Array(1,2,3,4);
// console.log(myArr[0]);

myArr.push(6)
myArr.push(7);
myArr.pop();

// myArr.unshift(9); // 9 will add in the first itself
// myArr.shift();
// myArr.shift(); // it will remove first elements

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join() // all elements in myArr will get into string type elements
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3);
console.log(myn1);

console.log("B",myArr);


const myn2 = myArr.splice(1,3); // it can cut the elements and print remainig elements
console.log("C",myArr);
console.log(myn2);





