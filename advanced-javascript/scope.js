let bonus = 15;

function sum(a, b) {
    const result = a + b + bonus;
    return result;
}

const output = sum(3, 7);
// console.log(output);
// console.log(bonus);


function hudai(x, y) {
    let result = x + y;
    if (result > 9) {
        let mood = "alone";
        mood = "sad";
        mood = "guilty";
        mood = "darkness";
        console.log(mood);
    }
    // console.log(day);
    // var day = "friday";
    return result;
}

const output2 = hudai(10, 20);
// console.log(output2);