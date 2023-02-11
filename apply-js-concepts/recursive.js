// -----Recursive area start;---
// Recursive function factorial numbers;
// 0! = 1
// 1 = 1*1
// 2 = 1*2
// 3 = 1*2*3
// 4 = 1*2*3*4
// 5 = 1*2*3*4*5
// 6 = (5-1)!*6
// 7 = (6-1)!7
// 8 = (7-1)!8
// 9 = (8-1)!9
// 10 = (9-1)!10
// n = n*(n-1)!

function factorialRecursive(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorialRecursive(n - 1);
    }
}
var output = factorialRecursive(7);
console.log(output);

//fibonacci series in recursive function;
function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
var resutl1 = fibonacci(10);
console.log(resutl1);


function fiboSeries(n){
    if (n==0) {
        return [0];
    }
    else if (n == 1) {
        return [0, 1];
    }
    else {
        var fibo = fiboSeries(n-1);
        var nextFibo = fibo[n-1] + fibo[n-2];
        fibo.push(nextFibo);
        return fibo;
    }
}
var output = fiboSeries(10);
console.log(output);


//fibonacci full series in Recursive function;
function fibonacci1(n) {
    if (n == 0) {
        return [0];
    }
    else if (n == 1) {
        return [0, 1];
    }
    else {
        //calculate array with nth element;
        var fibo = fibonacci1(n - 1);
        var nextElement = fibo[n - 1] + fibo[n - 2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result = fibonacci1(10);
console.log(result);

//fibonacci number in Recursive function;
function numberFibonacci(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return numberFibonacci(n - 1) + numberFibonacci(n - 2);
    }
}
console.log(numberFibonacci(12));

//Fibonacci fullseries in Recursive function;
function seriesFibonacci(n) {
    if (n == 0) {
        return [0];
    }
    else if (n == 1) {
        return [0, 1];
    }
    else {
        var seriesFibo = seriesFibonacci(n - 1);
        var seriesNextElement = seriesFibo[n - 1] + seriesFibo[n - 2];
        seriesFibo.push(seriesNextElement);
        return seriesFibo;
    }
}
var seriesResult = seriesFibonacci(12);
console.log(seriesResult);