// template of strings
let year = 2023;
let month = 10;
let day = 19;

console.log(`Today is ${year} year, ${month} month, and ${day} day.`)

// ------------------------------
let myNum = 3;

function getTwice(x) {
    return x * 2;
}

console.log(`Double of ${myNum} is ${getTwice(myNum)}`)

// -------------------------------

let variable;
console.log(variable); // print 'undefined'

variable = null;
console.log(variable); // print 'null'

console.log(null == undefined); // true
console.log(null === undefined); // false

// -------------------------------

let cup;
console.log(cup); // undefined
cup = 'water';
console.log(cup); // print water
cup = null;
console.log(cup); // print null

// ------------------------
