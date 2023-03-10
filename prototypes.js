//Object.prototype
//Person.prototype

// Person constructor
class Person {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = new Date(dob);
		// this.calculateAge = function () {
		// 	const diff = Date.now() - this.birthday.getTime();
		// 	const ageDate = new Date(diff);
		// 	return Math.abs(ageDate.getUTCFullYear() - 1970);
		// };
	}
	// Calculate age
	calculateAge() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
	// Get full name
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
	// Gets Married
	getsMaried(newLastName) {
		this.lastName = newLastName;
	}
}

const james = new Person('James', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary);

console.log(james.calculateAge());

console.log(mary.getFullName());

mary.getsMaried('Smith');

console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));
