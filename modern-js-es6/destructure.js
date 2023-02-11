const person1 = { name: 'Lotus Shafiul', age: 22, job: 'facebooker', gfName: 'Mitu Talukder', address: 'Sordar bari', phone: '01523467899', friends: ['Nuru', 'Sadiya'] };

// const {phone} = {name: 'Lotus Shafiul', age: 22, job: 'facebooker', gfName: 'Mitu Talukder', address: 'Kochu khet', phone: '01523467899', friends: ['Nuru', 'Sadiya']};
const { phone } = person1;
const { gfName, address, age, job, salary, friends } = person1;
// const gfName = person1.gfName;
// const phone = person1.phone;

// console.log(phone);
// console.log(gfName, address);
// console.log(age, job, salary, friends);


const friends2 = ['ramu', 'samu', 'mamu', 'famu', 'emu', 'jamu'];
const [choto, nextFriend, ...restFriends] = friends2;
console.log(restFriends);


const complexObj = {
    name: 'abc',
    info: {
        address: 'Kola bagan',
        leader: 'Tiger'
    }
}
const { leader } = complexObj.info;
console.log(leader);