


// creating a fucntion;
// calling a function;
// how to pass a value in function;
// returning a value;


// Salam function
function greeting() {
    console.log('Assalamualikum Orahmatullahi Oyabarakatuh.');
    console.log('Alhumdulillah.');
}
greeting();
var huzur = "Mosque";
var teacher = "College";
greeting();
var abbu = "Phone";
greeting();

//Reading book (function)
function readingBook() {
    console.log('Department Subject');
    console.log('for example (Object, communication, structure)');
}
readingBook();
var college = "class";
readingBook();
var hostel = "ownroom";
readingBook();
var morning = "roof";
readingBook();

//Playing cricket
function play() {
    console.log('Playing Cricket');
    console.log('& Waste your own time');
}
play();
var afternoon = 'campus field';
var kadoirField = 'cricket';
play();


//Parameter function
function doubleIt(num) {
    var result = num * 2;
    return result;
}
var first = doubleIt(50);
var second = doubleIt(7);
var total = first + second;
console.log(total);

//Parameter function-2
function add(num1, num2) {
    var result = num1 + num2;
    return result;
}
var sum = add(15, 17);
console.log(sum);

//Parameter function-3
function name1(firstname, lastname) {
    var fullname = firstname + lastname;
    return fullname;
}
var sum = name1('Masum ', 'Billah');
console.log(sum);

//Parameter function-4
function name(fruit, flower) {
    var price = fruit - flower;
    return price;
}
var priceDifference = name(99, 70);
console.log(priceDifference);


//Inch to Feet convert;
function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var nanaFeet = inchToFeet(180);
console.log('Nana-', nanaFeet);
var dadaFeet = inchToFeet(204);
console.log('dada-', dadaFeet);
var dadiFeet = inchToFeet(324);
console.log('dadi-', dadiFeet);
var naniFeet = inchToFeet(252);
console.log('nani-', naniFeet);

//Feet to Inch convert;
function feetToInch(feet) {
    var inch = feet * 12;
    return inch;
}
var masum = feetToInch(5.4);
var nazmul = feetToInch(5.35);
var tazbir = feetToInch(5.2);
console.log('masum-', masum);
console.log('nazmul vai-', nazmul);
console.log('tazbir vai-', tazbir);



//Leap year function;
function leapYear(year) {
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }
}
let checkLeap = leapYear(2024);
console.log(checkLeap);


//Factorial Numbers fucntion;
function factorial(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
var result = factorial(5);
console.log(result);

//Fibonacci series number convert to js pogrammming (function, loop);
// first two number of fibonacci, fibo = [0, 1]
// fibo[2] = fibo[2 - 1] + fibo[2 - 2]
// fibo[3] = fibo[3 - 1] + fibo[3 - 2]
// fibo[4] = fibo[4 - 1] + fibo[4 - 2]
// fibo[5] = fibo[5 - 1] + fibo[5 - 2]
// fibo[n] = fibo[n - 1] + fibo[n - 2]



//Fibonacci in (for loop with function);
function fibonacci(n) {
    var fibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        // console.log(fibo[i - 1], fibo[i - 2], fibo[i]);
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);

//Fibonacci in (while loop with function);
function fibonacci(n) {
    var fibo = [0, 1];
    var i = 2;
    while (i <= n) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        i++;
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);

//Recursive area start
//Recursive function factorial numbers;
//0! = 1
//1 = 1*1
//2 = 1*2
//3 = 1*2*3
//4 = 1*2*3*4
//5 = 1*2*3*4*5
//6 = (5-1)!*6
//7 = (6-1)!7
//8 = (7-1)!8
//9 = (8-1)!9
//10 = (9-1)!10
//n = n*(n-1)!

function factorialRecursive(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorialRecursive(n - 1);
    }
}
var output = factorialRecursive(10);
console.log(output);

//Fibonacci numbers in function;;
function seriesFibonacci(n) {
    var seriesFibo = [0, 1];
    for (var i = 2; i <= n; i++) {
        seriesFibo[i] = seriesFibo[i - 1] + seriesFibo[i - 2];
    }
    return seriesFibo;
}
var resultFibo = seriesFibonacci(12);
console.log(resultFibo);


//Check Prime number;
function primeNumber(n) {
    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return 'Not a prime number';
        }
    }
    return 'This is a Prime number';
}
var checkResult = primeNumber(23);
console.log(checkResult);


//Function for total value of fibonacci series with for-loop;
function arraySum(values) {
    var sumFibo = 0;
    for (var i = 0; i < values.length; i++) {
        var element3 = values[i];
        sumFibo = sumFibo + element3;
    }
    return sumFibo;
}
var values = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
var result4 = arraySum(values);
console.log("Array total numbers:", result4);
var result5 = arraySum([69, 14, 6, 1, 1, 1, 1, 2, 9, 5]);
console.log("Second-Array total numbers:", result5);

//Function for total value of fibonacci series with while-loop;
function arraySumWhile(values2) {
    var totalFibo = 0;
    var i = 0;
    while (i < values2.length) {
        var elementFibo = values2[i];
        totalFibo = totalFibo + elementFibo;
        i++;
    }
    return totalFibo;
}
var values2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var totalValue = arraySumWhile(values2);
console.log("total is = ", totalValue);

//remove duplicate number in a function;
var variousNums = [5, 2, 5, 6, 3, 8, 7, 1, 9, 8];
var notDuplicateNumber = [];
function removeDuplicate(variousNums) {
    for (var i = 0; i < variousNums.length; i++) {
        var uniqueElement = variousNums[i];
        var indexNum = notDuplicateNumber.indexOf(uniqueElement);
        if (indexNum == -1) {
            notDuplicateNumber.push(uniqueElement);
        }
    }
    return notDuplicateNumber;
}
notDuplicateNumber = removeDuplicate(variousNums);
console.log(notDuplicateNumber);

//Reverse pogram start;
function reverseString(str) {
    var reverse = "";
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var statement = 'Hello alien bhai brother.';
var forAlien = reverseString(statement);
console.log(forAlien);
var myName = reverseString("manner");
console.log(myName);

//another pogram;
var elements = [52, 36, 89, 47, 56, 25, 63, 45,];
for (var i = 0; i < elements.length; i++) {
    var newElement = elements[i];
    console.log(newElement);
}

//a
function add(number1, number2) {
    var total = number1 + number2;
    return total;
}
var totalNumber = add(65, 10);
console.log(totalNumber);
console.log('not adding this time', totalNumber);


// Identify even & odd number pogram;
function evenify(num) {
    let output1;
    if (num % 2 == 0) {
        output1 = num;
    }
    else {
        output1 = num * 2;
    }
    return output1;
}
let output1 = evenify(13);
let square = output1 * output1;
console.log(square, '= square');


//Inch to Feet convert;
function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
var senior = [156, 288, 300];

var nanaFeet = inchToFeet(senior[2]);
console.log('Nana -', nanaFeet);

var naniFeet = inchToFeet(senior[1]);
console.log('Nani -', naniFeet);

var dadaFeet = inchToFeet(senior[0]);
console.log('Dada -', dadaFeet);


function isLepaYear(year) {
    const leap = year % 4;
    if (leap == 0) {
        return true;
    }
    else {
        return false;
    }
}
var myYear = isLepaYear(2022);
console.log(myYear);



// fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55;
function fibonacci(n) {
    if (n == 0) {
        return [0];
    }
    else if (n == 1) {
        return [0, 1];
    }
    else {
        // calculate array with nth element;
        var fibo = fibonacci(n - 1);
        var nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacci(10);
console.log(result);


// even and odd number
function evenify(num) {
    var result;
    if (num % 2 === 0) {
        result = num;
    }
    else {
        result = num * 2;
    }
    return result;
}
var result = evenify(6);
var square2 = result * result;
console.log('square = ', square2);

//another even & odd number pogram
function evenify_all(nums) {
    var even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num);
        even_array.push(result);
    }
    return even_array;
}
var nums = [2, 6, 5, 8, 9, 10, 7, 49];
var nums_even = evenify_all(nums);
console.log(nums_even);