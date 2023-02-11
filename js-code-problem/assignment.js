//Convert feet/foot to mile with function pogram;
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
var dadiMile = feetToMile(100000);
console.log(dadiMile);

var naniMile = feetToMile(52800);
console.log(naniMile);

var nanaMile = feetToMile(121440);
console.log(nanaMile);


//brick Calculator;
function brickCalculator(floor) {
    var totalBrick = 0;
    if (floor <= 10) {
        var firstPart = floor * 15000;
        totalBrick = firstPart;
    } else if (floor <= 20) {
        var firstPart = 10 * 15000;
        var minusFirst = floor - 10;
        var secondPart = minusFirst * 12000;
        totalBrick = firstPart + secondPart;
    } else {
        var firstPart = 10 * 15000;
        var secondPart = 10 * 12000;
        var minusFirstSecond = floor - 20;
        var thirdPart = minusFirstSecond * 10000;
        totalBrick = firstPart + secondPart + thirdPart;
    }
    return totalBrick;
}
var result = brickCalculator(29);
console.log(result);


//tiny friend pogram;
function tinyFriend(friends) {
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i];
        if (element < smallName) {
            smallName = element;
        }
    }
    return smallName;
}
var friends = ['rahim', 'karim', 'atik', 'aminurislamkomol', 'abid', 'rafi', 'morim', 'dolim'];
// var friends = [32, 15, 63, 9, 5, 1, 47, 100];
var smallName = friends[0];

smallName = tinyFriend(friends);
console.log('small =', smallName);


//animal counter;
var depth = 30;
var animal = 0;
if (depth <= 10) {
    animal = depth * 50;
}
else if (depth <= 20) {
    var first10 = 10 * 50;
    var remaining = depth - 10;
    var second10 = remaining * 100;
    animal = first10 + second10;
}
else {
    first10 = 10 * 50;
    second10 = 10 * 100;
    var remaining = depth - 20;
    var third10 = remaining * 300;
    animal = first10 + second10 + third10;
}
console.log(animal);

//Animal counter pogram;
function animalCounter(deep) {
    var totalAnimal = 0;
    if (deep <= 10) {
        firstSide = deep * 60;
        totalAnimal = firstSide;
    }
    else if (deep <= 20) {
        var firstSide = 10 * 60;
        var secondSideOnly = deep - 10;
        var secondSide = secondSideOnly * 120;
        totalAnimal = firstSide + secondSide;
    }
    else {
        firstSide = 10 * 60;
        secondSide = 10 * 120;
        var thirdSideOnly = deep - 20;
        var thirdSide = thirdSideOnly * 250;
        totalAnimal = firstSide + secondSide + thirdSide;
    }
    return totalAnimal;
}
var findAnimal = animalCounter(35);
console.log(findAnimal);


//Factorial numbers pogram (Iterative method);
var firstFactorial = 1;
for (var i = 1; i <= 6; i++) {
    firstFactorial = firstFactorial * i;
    console.log('i=', i, 'fact=', firstFactorial);
}

//while loop;
function factorial(n) {
    var factorial = 1;
    var i = 1;
    while (i <= n) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var newFactorial = factorial(7);
console.log('While loop factorial is =', newFactorial);

//factorial with recursive;
function factorRecurs(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorRecurs(n - 1);
    }
}
var factResult = factorRecurs(6);
console.log(factResult);


// Javascript program to determine amoun of wood;
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        console.log("Please! Enter the valid input");
    }
    let totalWood = (chair * 1) + (table * 3) + (bed * 5);
    console.log("Total wood needed : " + totalWood + "cf.");
}
woodCalculator(1, 5, 10);

// brick Calculator;
function brickCalculator(floor) {
    var totalbrick = 0;
    if (floor < 0) {
        return "Value cannot be negative";
    }
    if (floor <= 10) {
        var firstTen = floor * 15 * 1000;
        totalbrick = firstTen;
    } else if (floor <= 20) {
        firstTen = 10 * 15 * 1000;
        var removeFirstTen = floor - 10;
        var secondTen = floor * 12 * 1000;
        totalbrick = removeFirstTen + secondTen;
    } else {
        firstTen = 10 * 15 * 1000;
        secondTen = 10 * 12 * 1000;
        var previousFloors = floor - 20;
        var remainingFloors = floor * 10 * 1000;
        totalbrick = remainingFloors + previousFloors;
    }
    return totalbrick;
}
var output = brickCalculator(220);
console.log(output);

// Javascript program to find tiny friend;
function tinyFriend(friends) {
    if (friends.length == 0) {
        console.log("Please enter a valid list");
        return;
    }

    let tiny = friends[0];
    for (let i = 0; i < friends.length; i++) {
        tiny = friends[i];
    }
    return tiny;
}
var friend = tinyFriend(['nuru', 'sabuj', 'sarif']);
console.log(result);

// Javascript program feet to mile;
function feetToMile(feet) {
    var mile = feet / 5280;
    if (feet < 0) {
        return 'Distance cannot be negative';
    }
    return mile;
}
var result = feetToMile(5280);
console.log(result);

// Wood calculator;
function calculatorWood(chair, table, bed) {
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    if (chair < 0 || table < 0 || bed < 0) {
        return "Quantity cannot be negative";
    }
    var totalWoods = chairWood + tableWood + bedWood;
    return totalWoods;
}
var woodReult = calculatorWood(1, 3, 1);
console.log(woodReult);