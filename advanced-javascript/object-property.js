const students = [
    { id: 11, name: 'Rifat' },
    { id: 21, name: 'Esmon' },
    { id: 31, name: 'Shamim' },
    { id: 51, name: 'Arif' },
    { id: 41, name: 'Shaiful' }
];
const names = [];

for (let i = 0; i < students.length; i++) {
    const element = students[i];
    const nameProperty = element.name;
    names.push(nameProperty);
}

console.log(names);


const names2 = students.map(s => s.name);
const ids = students.map(s => s.id);

const bigger = students.filter(s => s.id > 40);
const smaller = students.filter(s => s.name.length <= 5);
console.log(smaller);