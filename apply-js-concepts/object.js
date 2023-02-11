var student = { Roll: 4779, Id: 121, Number: 18785, Name: 'Atik' };
var student2 = { Roll: 4780, Id: 122, Number: 18786, Name: 'Anas' };
//Object property Access
var rules1 = student.Id;
var rules2 = student['Name'];
var rules3 = 'Id';
var number3 = student2[rules3];
console.log(rules2);
console.log(number3);
//Change Object property Name, Value & Add new Name;
student.Name = 'Anis';
student.section = 'A';
console.log(student);
student2.Number = 18789;
student2['Id'] = 123;
student2.depart = 'CMT';
console.log(student2);

//Object second Pogram;
var man1 = { name: 'Safaet', phone: 1868, relation: 'friend', village: 'Bagarpuskoruni' };
var man2 = { name: 'Masum', phone: 2878, relation: 'Me', village: 'Kadoir' };
var find = man2['village'];
man1['address'] = 'Madhavpur'
man2['village'] = 'Kadair';
man2['address'] = 'Kotbari';
console.log(man1.relation);
console.log(find);
console.log(man1);
// console.log(man2);

var person1 = { id:121, phone:1234, name:'Abir'};
var person2 = { id:122, phone:5678, name:'Kabir'};
var object = person1.phone
var object2 = person2['name'];
console.log(object);
console.log(object2);