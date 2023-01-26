// An iterator is an object which defines a sequence and potentially a return value upon its termination. Specifically, an iterator is any object which implements the Iterator protocol by having a next() method that returns an object with two properties: 1. value - The next value in the iteration sequence; 2. done - This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator's return value. Once created, an iterator object can be iterated explicitly by repeatedly calling next().

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
	let nextIndex = start;
	let iterationCount = 0;

	const rangeIterator = {
		next() {
			let result;
			if (nextIndex < end) {
				result = { value: nextIndex, done: false };
				nextIndex += step;
				iterationCount++;
				return result;
			}
			return { value: iterationCount, done: true };
		},
	};
	return rangeIterator;
}

const it = makeRangeIterator(1, 10, 2);

let result = it.next();

while (!result.done) {
	console.log(result.value); // 1 3 5 7 9
	result = it.next();
}

console.log('Iterated over sequence of size: ', result.value); // Iterated over sequence of size:  5 (5 numbers returned, that took interval in between: 0 to 10)

// Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous. When called, generator functions do not initially execute their code. Instead, they return a special type of iterator, called a Generator. When a value is consumed by calling the generator's next method, the Generator function executes until it encounters the yield keyword. The function can be called as many times as desired, and returns a new Generator each time. Each Generator may only be iterated once.

function* makeRangeIteratorGenerator(start = 0, end = Infinity, step = 1) {
	let iterationCount = 0;

	for (let i = start; i < end; i += step) {
		iterationCount++;
		yield i;
	}
	return iterationCount;
}

const iterator = makeRangeIteratorGenerator(1, 10, 2);

let res = iterator.next();

while (!res.done) {
	console.log(res.value); // 1 3 5 7 9
	res = iterator.next();
}

console.log('Iterated over sequence of size: ', res.value); // Iterated over sequence of size:  5 (5 numbers returned, that took interval in between: 0 to 10)
