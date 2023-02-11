// fill the empty array age > 35

let cricketer = [
    {
        name: "Shofiq al Hasan",
        age: 36,
        avg: 38
    },
    {
        name: "Sobuj Mahmud",
        age: 35,
        avg: 39
    },
    {
        name: "Nuruzzman Catrolig",
        age: 38,
        avg: 35
    },
    {
        name: "Masum Billah",
        age: 39,
        avg: 30
    },
    {
        name: "Mohammad Ashraful",
        age: 40,
        avg: 30
    }
];

let cricketerName = [];

for (let i = 0; i < cricketer.length; i++) {
    if (cricketer[i].age > 35) {
        cricketerName.push(cricketer[i].age);
    }
}

console.log(cricketerName);