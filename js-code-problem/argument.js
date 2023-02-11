//remove duplicate number in a function;
function removeDuplicate(variousNum) {
    var notDuplicate = [];
    for (var i = 0; i < variousNum.length; i++) {
        var uniqueElement = variousNum[i];
        var indexNum = notDuplicate.indexOf(uniqueElement);
        if (indexNum == -1) {
            notDuplicate.push(uniqueElement);
        }
    }
    return indexNum;
}
var variousNum = [5, 2, 5, 6, 3, 8, 7, 1, 9, 8];
var singleNumberOutput = removeDuplicate(variousNum);
console.log("single number is = ", singleNumberOutput);


// argument
function addNumber(a, b) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum += num;
    }
    return sum;
}
var result = addNumber(5, 7, 10, 20, 8);
console.log(result);


// a function
function logInfo(message) {
    console.log(message);
}
logInfo('hello world');

// ‍another arguments
function getFullName(firstName, lastName) {
    let fullName = '';
    // const result = [...arguments].join(' ');
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart;
    }
    return fullName;
} 
const name = getFullName('Hanif', 'Songet', 'Poribohon', 'omuk', 'songket', 'IBM');
console.log(name);