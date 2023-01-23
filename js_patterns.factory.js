// The factory pattern is an OOP design pattern that involves creating objects by using a factory. A factory is an object or class or a function in a functional programming paradigm for creating objects. Although there are different object creation methods in JavaScript, the factory pattern keeps our object creation logic concise and reusable. Factories keep our code clean by centralizing our object creation logic and eliminating repeated constructor calls with the new operator.

class MemberFactory {
	constructor() {
		this.createMember = function (name, type) {
			let member;

			if (type === 'simple') {
				member = new SimpleMembership(name);
			} else if (type === 'standard') {
				member = new StandardMembership(name);
			} else if (type === 'super') {
				member = new SuperMembership(name);
			}

			member.type = type;

			member.define = function () {
				console.log(`${this.name} (${this.type}): ${this.cost}`);
			};

			return member;
		};
	}
}

class SimpleMembership {
	constructor(name) {
		this.name = name;
		this.cost = '$5';
	}
}

class StandardMembership {
	constructor(name) {
		this.name = name;
		this.cost = '$15';
	}
}

class SuperMembership {
	constructor(name) {
		this.name = name;
		this.cost = '$25';
	}
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Janice Williams', 'simple'));
members.push(factory.createMember('Tom Smith', 'standard'));

console.log(members); // [SimpleMembership, SuperMembership, SimpleMembership, StandardMembership]

members.forEach(function (member) {
	member.define();
});
// Output: John Doe (simple): $5
// Output: Chris Jackson (super): $25
// Output: Janice Williams (simple): $5
// Output: Tom Smith (standard): $15
