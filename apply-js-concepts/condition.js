//Friendship
var friendShip = true;
var heCalled = 0;
if (friendShip == true || heCalled > 2) {
    console.log("Real Frienship");
}
else {
    console.log("UNREAL Frienship");
}

// TimeZone
var date = new Date('2022-2-4');
console.log(date);
var date2 = new Date();
console.log(date2);

// Nazmul vai
var gotGpa5 = false;
var marks = 83;
if (gotGpa5 == true && marks > 85) {
    console.log("Nazmul vai got Goden-A+");
}
else if (gotGpa5 == true) {
    console.log("Nazmul vai got General-A+")
}
else {
    console.log("Nazmul vai got Grade-A")
}

// Friends
var friend = true;
var dueMoney = 200;
var date = new Date('2022-2-7');
if (friend == true && dueMoney < 250) {
    console.log("I Paid this Money");
    console.log(date);
}
else if (friend == true) {
    console.log("Friend Ship is the best");
}
else {
    console.log("Friend-Ship");
}

condition
var digit = 5;
if (digit > 100) {
    console.log('if is right');
}
else if (digit == 100) {
    console.log('1st is right')
}
else if (digit == 50) {
    console.log('2nd is right')
}
else if (digit == 25) {
    console.log('3rd is right')
}
else if (digit == 15) {
    console.log('4th is right')
}
else if (digit == 5) {
    console.log('5th is right')
}
else {
    console.log('else is right');
}

//Max Number
var a, b, c, max;
a = 5;
b = 9;
c = 7;
if (a > b && a > c) {
    console.log('max = a');
}
else if (b > a && b > c) {
    console.log('max = b');
}
else {
    console.log('max = c');
}

//Max number2
var a = 2;
var b = 3;
var c = 4;
if (a > b) {
    if (a < c) {
        console.log(a);
    }
    else {
        console.log('max is ', c);
    }
}
else {
    if (b > c) {
        console.log(b);
    }
    else {
        console.log('max is ', c);
    }
}


//leap year;
const year = 3456;
let remainder = year % 4;
if (remainder == 0) {
    console.log('This is a leap year');
}
else {
    console.log('This is not a leap year')
}

//Maximum Numbers;
var rickshawDriver = 5487;
var autoDriver = 4545;
var cngDriver = 4352;
if (rickshawDriver > autoDriver) {
    if (rickshawDriver > cngDriver) {
        console.log('Rickshaw Puller is rich');
    }
    else {
        console.log('CNG driver is rich');
    }
}
else {
    if (autoDriver > cngDriver) {
        console.log('Auto driver is rich');
    }
    else {
        console.log('CNG driver is rich');
    }
}


var biscuitPrice = 80;
if (biscuitPrice <= 100) {
    console.log('i will eat the biscuits');
}
else {
    console.log('khali cha is better');
}

var jobPiso = true;
var savingAmount = 500000;

if (jobPiso == true && savingAmount >= 200000) {
    console.log('Aso tomar patri khuji');
}
else {
    console.log('tor kopale biya nai');
}