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

anne.getsMarried('Thompson');

console.log(anne);

console.log(OtherPerson.addNumbers(1, 2));
