function evenify(num) {
    if (num % 2 == 0) {
        console.log(num, " is a even number");
    } else {
        console.log(num, " is odd number");
    }
}
evenify(24);

function evenify_2(num) {
    var result;
    if (num % 2 == 0) {
        result = num;
    } else {
        result = num * 2;
    }
    return result;
}
var result = evenify_2(112);
console.log("result is ", result);

function addNumbers(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}
var result = addNumbers(2, 3, 5, 10, 20);
console.log(result);


// reverse program
function reverseString(str) {
    var reverse = '';
    for (let i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = 'hello! alien bhai brother';
var forAlien = reverseString(statement);
console.log(forAlien);
var food = reverseString('ki kamu, kida lagse');
console.log(food);