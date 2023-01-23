// Destructuring Assignment
let a, b;
[a, b] = [100, 200];
// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];
console.log(rest); // [400, 500]

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
console.log(rest); // {c: 300, d: 400, e: 500}

// Array Destructuring
const people = ['John', 'Beth', 'Mike'];
const [person1, person2, person3] = people;
console.log(person1, person2, person3); // John Beth Mike

// Parse array returned from function
function getPeople() {
	return ['John', 'Beth', 'Mike'];
}
let name1, name2, name3;
[name1, name2, name3] = getPeople();
console.log(name1, name2, name3); // John Beth Mike

// Object Destructuring
const person = {
	fullName: 'John Doe',
	gender: 'Male',
	city: 'Miami',
	sayHello: function () {
		console.log('Hello');
	},
};

// Old ES5
// const fullName = person.fullName,
//       gender = person.gender,
//       city = person.city;
//       sayHello = person.sayHello;

// New ES6 Destructuring
const { fullName, gender, city, sayHello } = person;
console.log(fullName, gender, city); // John Doe Male Miami
sayHello(); // Hello
