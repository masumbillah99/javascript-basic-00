var i = 2;
while (i <= 5) {
    console.log("JS while Loop", i);
    i++;
}

console.log(sum);


var number = 5;
while (number <= 12) {
    console.log("JS While Boring", number);
    number++;
}

//Task- a pogram that will print sum of all the number 3 and 5 about 1 to 100;
var i = 1;
var sum = 0;
while (i <= 50) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(" " + i);
        sum = sum + i;
    }
    i = i + 1;
}
console.log(" " + sum);
console.log('end');

//Even numbers
var i = 2;
while (i <= 30) {
    console.log(i);
    i = i + 2;
}
//Odd numbers
var i = 1;
while (i <= 29) {
    console.log(i);
    i = i + 2;
}

//FOR LOOP START;
//FOR LOOP START;

var nums = [11, 22, 33, 44, 55, 66, 77];
for (var i = 0; i < nums.length; i++) {
    var element = nums[i];
    console.log(element);
}

var friends = ['Nuru', 'Mehedy', 'Anas', 'Munna', 'Tarif', 'Safaet'];
for (var i = 0; i < friends.length; i++) {
    var element = friends[i];
    console.log(element);
}

var cousins = ['Rana','Rumon','Rony','Hasan','Hossen','Mayeen'];
for (var i = 0; i < cousins.length; i++) {
    var element = cousins[i];
    console.log(element);
}
var Read = ['Ant', 'Bat', 'Cap', 'Doll', 'Egg'];
for (var i = 0; i < Read.length; i++) {
    var element = Read[i];
    console.log(element);
}

var familyMembers = ['Abbu', 'Ammu', 'Belal vai', 'Saiful vai', 'Shahin vai', 'masum'];
for (var i = 0; i < familyMembers.length; i++) {
    var member = familyMembers[i];
    console.log(member);
}

var schoolFriend = ['Rifat', 'Sufian', 'Parvez', 'Nahid', 'Robiul', 'Roki'];
for (i = 0; i <= schoolFriend.length; i++) {
    var classmeet = schoolFriend[i];
    console.log(classmeet);
}


let fact = 1;
for (let i = 1; i <= 6; i++) {
    fact = fact * i;
    console.log(i, fact);  
}


let factorial = 1;
for (let i = 1; i <= 6; i++) {
    factorial = factorial * i;
    console.log(i, factorial);
}


// Check Prime number;
var n = 45;
for (i = 2; i < n; i++) {
    console.log(i, n % i);
    if (n % i == 0) {
        console.log('Not a prime number');
        break;
    }
}

//check prime number in while loop;
var n = 5;
var i = 2;
while (i < n) {
    console.log(i, n % i);
    i++;
    if (n % i == 0) {
        console.log('Is not a prime number');
        break;
    }
    else {
        console.log('A Prime number');
    }
}

var n = 9;
for (var i = 2; i < n; i++) {
    if (n % i == 0) {
        console.log('This is not a Prime number');
        break;
    }
    else{
        console.log('This is a Prime number');
    }
}


//Array sum pogram with while-loop start;
var seriesNumbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
var sum1 = 0;
var i = 0;
while (i < seriesNumbers.length) {
    var fiboElement = seriesNumbers[i];
    sum1 = sum1 + fiboElement;
    i++;
}
console.log('Fibo total value =', sum1);



//Remove duplicate names in a array with for-loop;
var names = ['Jamal', 'kamal', 'Amal', 'Bamal', 'kamal', 'Amal', 'Damal', 'Namal'];
var uniqueName = [];
for (var i = 0; i < names.length; i++) {
    var singleElement = names[i];
    var index = uniqueName.indexOf(singleElement);
    if (index == -1) {
        uniqueName.push(singleElement);
    }
}
console.log(uniqueName);


//Remove duplicate names in a array with for-loop;
var rollNumbers = [54, 28, 28, 61, 54, 86, 47, 79, 61];
var uniqueNumber = [];
var i = 0;
while (i < rollNumbers.length) {
    var singleNumber = rollNumbers[i];
    var index2 = uniqueNumber.indexOf(singleNumber);
    if (index2 == -1) {
        uniqueNumber.push(singleNumber);
    }
    i++;
}
console.log("Single number is:", uniqueNumber);