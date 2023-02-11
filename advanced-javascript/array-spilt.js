const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);
const removed = nums.splice(3, 3);
// console.log(part);
// console.log(removed);
// console.log(nums);

const together = nums.join('');
// console.log(together);


const ages = [20, 25, 30, 35, 40, 45];
const slice = ages.slice(3, 6);
const splice = ages.splice(0, 3, 100, 200);
// console.log(slice);
// console.log(ages);

const join = ages.join("");
console.log(join);