class MyPerson {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	greeting() {
		return `Hello there ${this.firstName} ${this.lastName}`;
	}
}

class Buyer extends MyPerson {
	constructor(firstName, lastName, phone, membership) {
		super(firstName, lastName);

		this.phone = phone;
		this.membership = membership;
	}

	static getMembershipCost() {
		return 500;
	}
}

const mike = new Buyer('Mike', 'Doe', '555-555-5555', 'Standard');

console.log(mike.greeting());

console.log(Buyer.getMembershipCost());
