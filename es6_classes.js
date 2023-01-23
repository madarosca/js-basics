class OtherPerson {
	constructor(firstName, lastName, dob) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthday = new Date(dob);
	}

	greeting() {
		return `Hello there ${this.firstName} ${this.lastName}`;
	}

	calculateAge() {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	}

	getsMarried(newLastName) {
		this.lastName = newLastName;
	}

	static addNumbers(x, y) {
		return x + y;
	}
}

const anne = new OtherPerson('Anne', 'Williams', '11-13-1980');
console.log('Anne: ', anne);
console.log(anne.greeting()); // Hello there Anne Williams
anne.getsMarried('Thompson');
console.log('married: ', anne);
console.log(OtherPerson.addNumbers(1, 2)); // 3

// Default constructor: When no constructor is written, js provides a no-argument default constructor, and the instance variables are set to their default values (0 for int and double, null for objects like String).
class Alien {
	constructor() {
		this.fullName = 'ET';
		this.planet = 'Mars';
	}

	greeting() {
		return `Hello there ${this.fullName} from planet ${this.planet}`;
	}

	getsHumanized(newFullName, newPlanet) {
		this.fullName = newFullName;
		this.planet = newPlanet;
	}

	static addAliens(x, y) {
		return x + y;
	}
}

const alien = new Alien();
console.log('Alien: ', alien);
console.log(alien.greeting()); // Hello there ET from planet Mars
alien.getsHumanized('John Doe', 'Earth');
console.log('humanized: ', alien);
console.log(alien.addAliens(1, 2)); // alien.addAliens is not a function
