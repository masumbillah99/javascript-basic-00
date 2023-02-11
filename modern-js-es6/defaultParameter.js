function add(a, b = 20) {
    return a + b;
}
const sum = add(2, 10);
console.log(sum);


function multiply(x, y) {
    if (y === undefined) {
        y = 2;
    }
    return x * y;
}
const mult = multiply(5)
console.log(mult);

function addition(num1, num2 = 5) {
    // if (num2 == undefined) {
    //     num2 = 5;
    // }
    // num2 = num2 || 0;
    return num1 + num2;
}
const result = addition(4);
console.log(result);