var num = 25.56654;
var result = Math.floor(num);
var result2 = Math.ceil(num);
var result3 = Math.round(num);
//random number in for loop;
for (var i = 0; i <= 6; i++) {
    var randomNum = Math.random(num) * 6;
    var output = Math.floor(randomNum);
    console.log(output);
}


//Max income pogram 
var rickshawDriver = 1000;
var autoDriver = 970;
var cngDriver = 990;
if (rickshawDriver > autoDriver) {
    if (rickshawDriver > cngDriver) {
        console.log("RickshawPuller is rich");
    }
    else {
        console.log('CNG driver is rich');
    }
}
else {
    if (autoDriver > cngDriver) {
        console.log("Auto driver is rich");
    }
    else {
        console.log('CNG driver is rich');
    }
}

//max number pogram;
var num1, num2, num3, max;
num1 = 21;
num2 = 23;
num3 = 25;
if (num1 > num2 && num1 > num2) {
    console.log("Max is first number");
}
else if (num2 > num1 && num2 > num3) {
    console.log("Max is second number");
}
else {
    console.log("Max is third number");
}

//find max number with max;
var business = 344;
var minister = 455;
var sochib = 534;
var max = Math.max(business, minister, sochib);
console.log(max);
var min = Math.min(sochib, minister, business);
console.log(min);


var num = 2.4999989;
var math = Math.floor(num);
var math2 = Math.ceil(num);
var math3 = Math.round(num);
console.log('floor value', math);
console.log('ceil value', math2);
console.log('round value', math3);
var dice = Math.random() * 6;
var resultRandom = Math.round(dice);
console.log('random number = ', resultRandom);


// ludu game with for loop
for (let i = 0; i <= 6; i++) {
    var randomNumber = Math.random() * 6;
    var resultRandom = Math.round(randomNumber);
    console.log('dine = ', resultRandom);
}

// max number program
var businMan = 1450;
var minisMan = 2750;
var socib = 2650;

var max = Math.max(businMan, minisMan, socib);
console.log(max);


if (businMan > minisMan) {
    if (businMan > socib) {
        console.log('business is beggar');
    }
    else {
        console.log('minister is beggar');
    }
}
else {
    if (minisMan > socib) {
        console.log('minister is beggar');
    }
    else {
        console.log('socib is beggar');
    }
}

// max number in a array
var marks = [45, 68, 92, 75, 81, 35, 90];
var largest = marks[0];
for (let i = 0; i < marks.length; i++) {
    var element = marks[i];
    if (element > largest) {
        largest = element;
    }
}
console.log('highest value is : ', largest);

// sum number of array
function getArraySum(numbers) {
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        var element = marks[i];
        sum = sum + element;
    }
    return sum;
}
var numbers = [45, 68, 92, 75, 81, 35, 90];
var output = getArraySum(numbers);
console.log('total of the numbers: ', output);


// duplicate array
var name = [2, 3, 6, 2, 8, 7, 4, 6, 5, 1];
var uniqueName = [];
for (let i = 0; i < name.length; i++) {
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if (index == -1) {
        uniqueName.push(element);
    }
}
console.log(uniqueName);

// string
var speech = 'i am a  good person. i   dont   snore at night';
var count = 0;
for (let i = 0; i < speech.length; i++) {
    var char = speech[i];
    if (char == ' ' && speech[i-1] != ' ') {
        count++;
    }
}
count++;
console.log(count);