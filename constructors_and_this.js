// Person constructor
function Person(name, dob) {
	this.name = name;
	this.birthday = new Date(dob);
	this.calculateAge = function () {
		const diff = Date.now() - this.birthday.getTime();
		const ageDate = new Date(diff);
		return Math.abs(ageDate.getUTCFullYear() - 1970);
	};
}

const john = new Person('John', 30);
console.log(john.name); // John
console.log(john.age); // undefined

const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge()); // 41
