/*Prompt the user name*/
var userName = prompt('What is your name?');

console.log('Hello, ' + userName+ '! Lets play a little funny game. ');

/* series of questions 1 */

var birthYear = prompt('What is your birth year?');
var birthMonth = prompt('What is your birth month?');
var birthDay = prompt('What is your birth day?');
let birthDate = [birthYear, birthMonth, birthDay];

/* object information */

let someCountries = [
	'Italy',
	'France',
	'Australia',
	'Mexico',
	'China'
];

let Italy = {
	continent: 'Europe',
	language: 'Italian',
	area: '116,347 sq.mi'
};

let France = {
	continent: 'Europe',
	language: 'French',
	area: '248,573 sq.mi'
};

let Australia = {
	continent: 'Australia',
	language: 'English',
	area: '2.97 mln.sq.mi'
};

let Mexico = {
	continent: 'South America',
	language: 'Spanish',
	area: '758,400 sq.mi'
};

let China = {
	continent: 'Asia',
	language: 'Chinese',
	area: '3.705 mln.sq.mi'
};

/* series of questions 2 */

var someDay = prompt('When was your last vacation-travel outside the country? Please enter the year, month, and the date.')

var userVacation = Date(someDay);

var vacationLength = Number(prompt('How many days did you spend there? Please enter a number.'));

var vacationFood = prompt('What was your favourite food there?');

var vacationRate = prompt('How can you rate your vacation?');

/* Array input */

let relatives = [
	'Wife',
	'Husband',
	'Mother',
	'Father',
	'Sister',
	'Brother',
	'Cousin',
	'Niece',
	'Nephew'
];

relatives.push('Lover');

/*output the story*/

confirm('Good job! Press OK to read our story.');

var story = userName+ ' was born on ' + someDay + '. He visited ' +someCountries[1]+ ' on ' +userVacation+ ' and stayed there for ' +vacationLength+ ' days. He was with his ' +relatives[9] + ', and they enjoyed ' +vacationFood+ '. That vacation was one of the bests for them and he rates it ' +vacationRate+ '.';

console.log(story);