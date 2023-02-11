
// One Dimensional Array
var OneDArray = ["Asraful", "Mashrafee", "Mahmudul", "Tamim", "Mushfiq", "Sakib"];
console.log(OneDArray);

// Two Dimensional Array
var twoDArray = [
    ["Asraful", 17], ["Mashrafee", 02], ["Mahmudul", 30], ["Tamim", 28], ["Mushfiq", 15], ["Sakib", 75]
]
console.log(twoDArray);

var totalPublic = ['tazbir', 'nazmul', 'toyamin', 'masum', 'foysal', 'nuru'];
var position = totalPublic.indexOf('masum');
totalPublic[3] = 'shakil';
console.log(position);
console.log(totalPublic[3]);
console.log(totalPublic);
console.log(totalPublic[4]);

//Banana array (slice & splice);
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
console.log(fruits);
console.log(fruits.slice(0, 1));
var position = fruits.indexOf('Apple');
console.log(position);
var animal = ['cow', 'goat', 'sheep', 'dumba', 'Uot']
console.log(animal.length);
console.log(animal.splice(2, 4));

//animal array (slice & splice);
var animals = [`hen`, `duck`, `goat`, `cow`, `sheep`];
console.log(animals);
animals.unshift(`uot`);
console.log(animals);
console.log(animals.slice(1, 4));
console.log(animals.splice(1, 4));

let variable;
let age = 19;
age = 20;
age = [21, 23];
console.log(age);

//Array max number pogram start:
//Find maximum number in a Array with the help of for-loop, condition;
var examMarks = [53, 69, 84, 35, 95, 47, 99];
var maximum = examMarks[0];
for (i = 0; i < examMarks.length; i++) {
    var element = examMarks[i];
    if (element < maximum) {
        maximum = element;
    }
}
console.log('Highest value is=', maximum);

//Find maximum number in a array with the help of while-loop & condition;
var marks = [52, 56, 12, 54, 68, 94, 78];
var max = marks[0];
var i = 0;
while (i < marks.length) {
    var element2 = marks[i];
    i++;
    if (element2 > max) {
        max = element2;
    }
}
console.log("Max value/number is =", max);

//Array sum{fibonacci series} pogram with for-loop start:
var numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    var element3 = numbers[i];
    sum = sum + element3;
}
console.log("Total value of the numbers is:", sum);

//Word count in a array;
var speech = "Everyone hate me. Because i am a unsmart man. I do't know how talk to anyone.";
var count = 0;
for (var i = 0; i < speech.length; i++) {
    var char = speech[i];
    if (char == " " && speech[i - 1] !== " ") {
        count++;
    }
}
count++;
console.log(count);
console.log(speech[62]);
console.log(speech.length);

var friendsAge = [21, 23, 20, 19, 22];
console.log(friendsAge.length);
friendsAge.push(24);        // push() -- add element at the end;
friendsAge.push(25);
console.log(friendsAge);
console.log(friendsAge.length);
friendsAge.pop();           // pop() -- remove element from the end;
console.log(friendsAge);
console.log(friendsAge.length);

friendsAge.unshift(18);     // unshift() -- add element at the begining;
console.log(friendsAge);
friendsAge.shift();         // shift() -- remove element from the begining;
console.log(friendsAge);


var teaLine = ['palam', 'halam', 'balam','salam', 'kalam' ];
var part = teaLine.splice(4, 1);
console.log(part);


//  Task-8
// one dimensional array(1D)
// Create a function called highestScore that
// Receive a 1d array called scores
// return the highest score
function highestScore(scores) {
    var max = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (max < scores[i]) {
            max = scores[i];
        }
    }
    return max;
}
var scores = [23, 99, 45, 56, 28, 19, 76];
var maxScore = highestScore(scores);
console.log(maxScore);


//  Task-9
// two dimensional array(2D)
// Create a function called highestRunScorer that will
// Receive a 2D array called playersInfo
// Base on highest sore, return the name of the player

function highestRunScorer(playersInfo) {
    var highestScorer = playersInfo[0][0];
    var highestScore = playersInfo[0][1];
    for (let i = 1; i < playersInfo.length; i++) {
        if (highestScore < playersInfo[i][1]) {
            highestScorer = playersInfo[i][0];
            highestScore = playersInfo[i][1];
        }
    }
    return highestScorer;
}

var playersInfo = [
    ['asraful', 95],
    ['sakib', 75],
    ['musfiq', 98],
    ['tamim', 87],
    ['mahmudul', 128],
    ['mashrafee', 102],
]
var name = highestRunScorer(playersInfo);
console.log(name);