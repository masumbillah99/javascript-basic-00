// normal function declaretion
// function doubleIt(num) {
//     return num * 2;
// }

const doubleIt = function myfun(num) {
    return num * 2;
}


// es6 and arrow function
const doubleIt2 = num => num * 2;
const add = (x, y) => x + y;
const give7 = () => 7;
const doMath = (a, b) => {
    const sum = a + b;
    const sub = a - b;
    const result4 = sum * sub;
    return result4;
}

const result1 = add(7, 9);
const result2 = give7();
const result4 = doMath(15, 13);
console.log(result4);


// String concat()

let text1 = 'sea';
let text2 = 'food';
let text3 = 'time';
let stringConcat = text1.concat(' ', text2).concat(' ', text3);
// console.log(stringConcat);

console.log('hello');