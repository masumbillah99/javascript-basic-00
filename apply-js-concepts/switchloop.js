var num = 15;
switch (num) {
    case 100:
        console.log('THis number is 100');
        break;
    case 50:
        console.log('This number is 50');
        break;
    case 25:
    case 15:
        console.log('Correct number');
        break;
    default:
        console.log(`Sorry, number is not found`);
}

//Statement - Switch
var example = 'Papaya';
switch (example) {
    case 'orange':
        console.log('Orange are #59 a taka.');
        break;
    case 'Mango':
    case 'Papaya':
        console.log('Mango & Papya are #3.78 a taka.');
        break;
    default:
        console.log(`Sorry, no fruits`);
}

//Can I put a 'default' between cases?
var fruits = 'Banana';
switch (fruits) {
    case 'Orange':
        console.log('Oranges are $0.23 a pound');
        break;
    case 'Apple':
        console.log('Apples are $0.34 a pound');
        break;
    case 'Mango':
        console.log('Mangos are $1.5 a pound');
        break;
    case 'Carrot':
        console.log('Carrots are $1.2 a pound');
        break;
    case 'Banana':
    case 'Papaya':
        console.log('Both are $1.5 are a pound');
        break;
    default:
        console.log('Sorry, have no fruits');
}


// Vowel or Consonant Pogram
var string = 'a';
switch (string) {
    case 'a':
        console.log('vowel');
        break;
    case 'e':
        console.log('vowel');
        break;
    case 'i':
        console.log('vowel');
        break;
    case 'o':
        console.log('vowel');
        break;
    case 'u':
        console.log('vowel');
        break;
    default:
        console.log('consonant');
        break;
}


//Multi-case: chained operations,,
var foo = 1;
var output = 'Output:';
switch (foo) {
    case 0:
        output += 'So';
    case 1:
        output += ' What ';
        output += 'is '
    case 2:
        output += 'Your ';
    case 3:
        output += 'Name ';
    case 4:
        output += '?';
        console.log(output);
        break;
    case 5:
        output += '!';
        console.log(output);
        break;
    default:
        console.log('Please pick a number from 0 to 5');
}