// break

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 3) {
        break;
    }
    console.log(nums[i]);
}


// continue

const ages = [10, -20, 30, -40, 50, -60, 70, -80, 90];

for (let i = 0; i < ages.length; i++) {
    if (ages[i] < 0) {
        continue;
    }
    console.log(ages[i]);
}