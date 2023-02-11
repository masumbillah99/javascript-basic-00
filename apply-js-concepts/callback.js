
// function callBack(name, age, task) {
//     console.log('Hello!', name);
//     console.log('your age', age);
//     task();
// }

// function takeShower() {
//     console.log('Wash hand & take shower, after complete eating');
// }

// function washHand() {
//     console.log('After eat, wash hand with soap');
// }

// function scrollFb() {
//     console.log('Scroll fb but dont like any post');
// }

// callBack('Karim uddin', 17, takeShower);
// callBack('Rahim uddin', 19, washHand);
// callBack('Jalim uddin', 21, scrollFb);



// // 1st callback program
// function explain_callback(name, age, task) {
//     task();
//     console.log('hello', name);
//     console.log('your age', age);    
// }

// function goBazar() {
//     console.log('Go to bazar & bring necessary things');
// }

// function washHand() {
//     console.log('after eat, wash hand with soap');
// }

// function takeShower() {
//     console.log('wash hand & take shower');
// }

// explain_callback('rahim uddin', 19, goBazar);
// explain_callback('kamal uddin', 17, washHand);
// explain_callback('jamal uddin', 15, takeShower);


// // 2nd callback program
// function callback(name, cgpa, department) {
//     console.log('hey! I am', name);
//     console.log('my cgpa is', cgpa);
//     department();
// }
// function electrical() {
//     console.log('my dream is want to be a CSE Engineer');
// }
// function mechanical() {
//     console.log('I want to be a Mechanical Engineer');
// }
// function sceintist() {
//     console.log('I am a Sceintist');
// }

// callback('sabuj', 3.68, mechanical);
// callback('nuruzzaman', 3.72, electrical);
// callback('shohel uddin', 4.00, sceintist);

function welcomeGuest(name, greetHandler) {
    greetHandler(name);
}
const actorName = 'Tom Hanks';
function greetAfternoon(name) {
    console.log('Good Afternoon', name);
}
welcomeGuest(actorName, greetAfternoon);

function greetMorning(name) {
    console.log('Good Morning', name);
}
welcomeGuest(actorName, greetMorning);

function greetEvening(name) {
    console.log('Good Evening', name);
}
welcomeGuest('Shahidul Islam', greetEvening);