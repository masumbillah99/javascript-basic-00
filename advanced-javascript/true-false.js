// Falsy               // Truthy
// 0                   // 2, -2
// "", '', ``          // " ", '0', `me`
// undefined           // defined value
// null                // [], {}
// NaN 

const age = 4;
const name = "Solaiman";
let name2 = 'false';
// if (name2 || name2 == 0) {
//     console.log("condition is true");
// } else {
//     console.log("condition is false");
// }

const number = 0;
const person = "shofiq";
const ident = true; // false
console.log(ident)
if (person) {
    console.log(true);
} else {
    console.log(false);
}