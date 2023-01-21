// Iterator Example
const nameIterator = (names) => {
	let nextIndex = 0;

	return {
		next: () => (nextIndex < names.length ? { value: names[nextIndex++], done: false } : { done: true }),
	};
};

// // Create an array of names
const namesArr = ['Jack', 'Jill', 'John'];
// // Init iterator and pass in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
console.log(names.next());

// Generator Example
// function* sayNames() {
// 	yield 'Jack';
// 	yield 'Jill';
// 	yield 'John';
// }

// const sayName = sayNames();

// console.log(sayName.next().value);
// console.log(sayName.next().value);
// console.log(sayName.next().value);
// console.log(sayName.next().value);

// ID Creator
function* createIds(number) {
	let index = 1;

	while (index <= number) {
		yield index++;
	}
}

const gen = createIds(5);

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
