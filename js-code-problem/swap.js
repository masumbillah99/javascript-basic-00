// code problem--Swap 1(one);
var a = 5;
var b = 7;
console.log("before swap a=", a, " b=", b);
var exchange = a;
a = b;
b = exchange;
console.log("--after swap a=", a, " b=", b);

//code problem--Swap 2(two);
var x = 6;
var y = 8;
console.log('before swap x=', x, ' y=', y);
x = x + y;
y = x - y;
x = x - y;
console.log('--after swap x=', x, ' y=', y);

//code problem--Swap 3(three) with the help of Array;
var p = 10;
var q = 11;
console.log('before swap p=', p, ' q=', q);
[p, q] = [q, p];
console.log("--after swap p=", p, " q=", q);


// Arguments is a Array like object;
function getFullName(firstName, lastName) {
    let fullName = '';
    for (let i = 0; i < arguments.length; i++) {
        const namePart = arguments[i];
        fullName = fullName + ' ' + namePart;
    }
    return fullName;
}
const name = getFullName('Mohammad', 'masum', 'billah', 'yusuf');
console.log(name);


// callBack Function;
function welcomeGuest(name, greetHandler){
    greetHandler(name);
}
const guestName = 'Shahidul Islam';

function greetMorning(greet){
    console.log('Good Morning', greet);
}

function greetAfternoon(greet){
    console.log('Good Afternoon', greet)
}

function greetEvening(greet){
    console.log('Good Evening', greet);
}

welcomeGuest(guestName, greetMorning);
welcomeGuest('Billal Hossain', greetAfternoon);
welcomeGuest('Saiful Islam', function(name){
    console.log('Good Night', name);
});


var a = 5;
var b = 6;
console.log('before swap: a=', a, 'b=', b);
var c = a;
a = b;
b = a;
console.log('after swap: a=', a, 'b=', b);

var p = 2;
var q = 4;
[p, q] = [q, p];
console.log('after swap: a=', p, 'b=', q);