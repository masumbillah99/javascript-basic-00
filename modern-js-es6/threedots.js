// spread operator (...)

const ages = [12, 14, 54, 43, 24];
const ages2 = [22, 23, 31];
const ages3 = [23, 54, 84, 45];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2, 5, ...ages3];
// console.log(allAges2);

const minister = 450;
const business = 640;
const sochib = 350;
// const max = Math.max(minister, business, sochib);

const money = [510, 720, 350];
const max = Math.max(...money);
console.log(max);
// const max = Math.max(minister, business, sochib);
// const max = Math.max(...money);
// console.log(max);


function sum(x, y, z) {
    return x + y + z;
}
const nums = [1, 2, 3];
// console.log(sum(...nums));
const num = [0, 1, 2]
const newNum = 10;
const numStore = [...num, newNum];
console.log(numStore);


const line1 = [12, 36, 25, 46];
const line2 = [32, 65, 47, 89];
const line3 = [61, 35, 23, 45];
const allLines1 = line1.concat(line2).concat([15, 20]).concat(line3);
const allLines2 = [...line1, 15, ...line2, ...line3];
console.log(allLines2);

const farmer = 6050;
const labour = 4050;
const cobbler = 2050;
const money2 = [farmer, labour, cobbler];
const maximum3 = Math.max(...money2);
// console.log(maximum3);
const takaPoisa = [6050, 4050, 2050];
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);