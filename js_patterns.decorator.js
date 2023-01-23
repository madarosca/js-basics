// The Decorator pattern extends (decorates) an object’s behavior dynamically. The ability to add new behavior at runtime is accomplished by a Decorator object which ‘wraps itself’ around the original object. Multiple decorators can add or override functionality to the original object.

class User {
	constructor(name) {
		this.name = name;

		this.say = function () {
			console.log('User: ' + this.name);
		};
	}
}

class DecoratedUser {
	constructor(user, street, city) {
		this.user = user;
		this.name = user.name; // ensures interface stays the same
		this.street = street;
		this.city = city;

		this.say = function () {
			console.log('Decorated User: ' + this.name + ', ' + this.street + ', ' + this.city);
		};
	}
}

const run = () => {
	const user = new User('Kelly');
	user.say();

	const decorated = new DecoratedUser(user, 'Broadway', 'New York');
	decorated.say();
};

run();
// Output:
// User: Kelly;
// Decorated User: Kelly, Broadway, New York
