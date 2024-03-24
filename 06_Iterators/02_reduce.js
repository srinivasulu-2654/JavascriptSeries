const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 4)

// const myTotal = myNums.reduce( (acc,currVal) => acc + currVal, 0)

// console.log(myTotal)


const shoppingCart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName : "python",
        price : 1999
    },
    {
        itemName : "cpp",
        price : 299
    },
    {
        itemName : "mern",
        price : 12999
    }
]

const value = shoppingCart.reduce( (acc,item) => acc + item.price, 0)

console.log(value);