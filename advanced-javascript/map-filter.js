// map() -- map()
// map() method takes three inputs (value, index, array). And give an array in output.

const numbers = [3, 5, 7, 9, 11, 13];
const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }


// function square(value) {
//     return value * value;
// }

// const square = value => value * value;
// const square = x => x * x;

const result2 = numbers.map(function (value) {
    return value * value;
});

const result3 = numbers.map(x => x * x);
// console.log(result3);

// numbers.map(function (value, index, array) {
//     console.log(value, index, array);
// });



// filter() -- filter()
// filter() method takes three inputs (value, index, array). And gives an array in output.

const nums = [2, 4, 6, 8];
const bigger = nums.filter(value => value > 5);
// console.log(bigger);


// find() -- find()
// find() method takes three arguments/parameter (value, index, obj) && gives an single element in output.

const isThere = nums.find(value => value > 5);
// console.log(isThere);


const ages = [2, 4, 6, 8, 10];
// const ages2 = [];
// for (let i = 0; i < ages.length; i++) {
//     const element = ages[i];
//     const double = element * element;
//     ages2.push(double);
// }

// const output2 = ages.map(function double(element) {
//     return (element * element);
// });
const output2 = ages.map(element => element * element);

const output3 = ages.filter(element => element < 5);

const output4 = ages.find(element => element < 5);

const output5 = ages.forEach(function double(value, index, array) {
    console.log(value, index, array);
})

// const output6 = ages.reduce();
// console.log(output5);