// Check if string is palindrome
const isPalindrome = (string) => {
	const parsedString = string.replace(/\W/g, '').toLowerCase();

	return parsedString === parsedString.split('').reverse().join('');
};
console.log('isPalindrome: ', isPalindrome('noon')); // true
console.log('isPalindrome: ', isPalindrome('apple')); // false

// Recursive solution
const isPalindromeRecursive = (str) => {
	if (str.length === 1) return true;
	if (str.length === 2) return str[0] === str[1];
	if (str[0] === str.slice(-1)) return isPalindromeRecursive(str.slice(1, -1));

	return false;
};
console.log('is palindrome recursive: ', isPalindromeRecursive('noon')); // true
console.log('is palindrome recursive: ', isPalindromeRecursive('apple')); // false

// Check if string is an anagram
const validAnagram = (first, second) => {
	if (first.length !== second.length) return false;

	return first.split('').sort().toString() === second.split('').sort().toString();
};
console.log('is anagram: ', validAnagram('heart', 'earth')); // true

// Generate array with given number of fibonacci sequence
const fibonacci = (num) => {
	let result = [0, 1];

	for (let i = 2; i < num; i++) {
		const prev = result[i - 2];
		const curr = result[i - 1];
		result.push(prev + curr);
	}

	return result;
};
console.log('generate fibonacci sequence: ', fibonacci(8)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Add all numbers up to specified n
const addUpTo = (n) => (n * (n + 1)) / 2;
console.log('add up to n:', addUpTo(5)); // 15

// Add all numbers up to n with for loop
const addUpToNumber = (num) => {
	let total = 0;

	for (let i = 0; i <= num; i++) {
		total += i;
	}
	return total;
};
console.log('add up to n with for: ', addUpToNumber(5)); // 15

// Determine if x is integer
const isInteger = (x) => (x ^ 0) === x;
Number.isInteger(3); // true
console.log('is it integer: ', isInteger('3')); // false

// Calculate sum of all array elements
const sumOfArray = (arr) => {
	let total = 0;

	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
};
console.log('sum of array elements with for: ', sumOfArray([1, 3, 5, 7])); // 16

// Calculate sum with reduce
const sumOfArrayWithReduce = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('sum of array elements with reduce: ', sumOfArrayWithReduce([1, 3, 5, 7])); // 16

// Calculate product of all erray elements
const productOfArray = (arr) => arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log('product of array elements with for: ', productOfArray([1, 3, 5, 7])); // 105

// Calculate double of each array item
const double = (arr) => {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		newArr.push(2 * arr[i]);
	}
	return newArr;
};
console.log('double of each array element: ', double([1, 2])); // [2, 4]

// Calculate double of each array item with reduce
const doubleEachItem = (arr) => arr.reduce((acc, current) => [...acc, 2 * current], []);
console.log('doubleEachItem with reduce: ', doubleEachItem([1, 2]));

// Sort array of numbers with duplicate values
const arrayToSort = [23, 5, 33, 43, 43, 56, 44, 44, 36, 5, 23];
const sortedArray = arrayToSort.sort((x, y) => x - y);
console.log('sort array with duplicates: ', sortedArray); // [5, 5, 23, 23, 33, 36, 43, 43, 44, 44, 56]

// Remove duplicates from sorted array
const setFromArray = new Set(sortedArray);
const arrayFromSet = Array.from(setFromArray);
console.log('remove duplicates with set: ', arrayFromSet); // [5, 23, 33, 36, 43, 44, 56]

const arrToSort = ['scale', 'happy', 'strength', 'peace', 'peace', 'happy', 'strength'];
const removeDuplicatesAndSort = (array) => array.filter((item, index) => array.indexOf(item) === index).sort();
console.log('remove duplicates with filter: ', removeDuplicatesAndSort(arrToSort)); // ['happy', 'peace', 'scale', 'strength']

// Find max/min value in array
const array = [1, 10, -19, 2, 7, 100];
// array.sort((a, b) => a - b);
// console.log('max value', array[array.length - 1]); // 100
// console.log('min value', array[0]); // -19
console.log('max value', Math.max(...array)); // 100
console.log('min value', Math.min(...array)); // -19

// Return the index at which the value exists, else return -1
const linearSearch = (arr, val) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) return i;
	}
	return -1;
};
console.log('return index of existent value: ', linearSearch(['apple', 'car', 'dog'], 'dog')); // 2

// Reduce array of objects given condition
const arrayOfObjects = [
	{ firstName: 'John', lastName: 'Doe', age: 35 },
	{ firstName: 'Jane', lastName: 'Austin', age: 24 },
	{ firstName: 'Mike', lastName: 'Heck', age: 45 },
	{ firstName: 'Frankie', lastName: 'Blue', age: 30 },
	{ firstName: 'Anne', lastName: 'Boleyn', age: 18 },
];

const reducedArray = arrayOfObjects.reduce((acc, curr) => {
	if (curr.age < 35) {
		return [...acc, { name: `${curr.firstName} ${curr.lastName}` }];
	}
	return acc;
}, []); // [{ name: 'Jane Austin' }, { name: 'Frankie Blue' }, { name: 'Anne Boleyn' }];
console.log('reduce array of objects: ', reducedArray);

// Count how many unique values are in array
const countUniqueValues = (arr) => {
	if (arr.length === 0) return 0;
	let i = 0;
	for (let j = 1; j < arr.length; j++) {
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	return i + 1;
};
console.log('how many unique values: ', countUniqueValues([1, 2, 2, 5, 7, 7, 99])); // 5

// Get a random value from an array
const mixedArray = ['fatfish', 'fish', 24, 'hello', 'world'];
const getRandomValue = (array) => array[Math.floor(Math.random() * array.length)];

// Return first pair of numbers in array which add to 0
const sumZero = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]];
			}
		}
	}
};
console.log('first pair that adds to 0: ', sumZero([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]

// Calculate the sum of the first given elements
const maxSubarraySum = (arr, num) => {
	let maxSum = 0;

	if (arr.length < num) return null;

	for (let i = 0; i <= num; i++) {
		maxSum += arr[i];
	}

	return maxSum;
};
console.log('sum of subarray elements: ', maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 4)); // 20

// Check if there are duplicates, no matter the number of arguments
const areThereDuplicates = (...args) => {
	let start = 0;
	let next = 1;

	args.sort((a, b) => a > b);

	while (next < args.length) {
		if (args[start] === args[next]) {
			return true;
		}
		start++;
		next++;
	}
	return false;
};
console.log('check for duplicates in args: ', areThereDuplicates(1, 2, 3, 4, 5)); // false

// Count down from num to 0
// // Iterative Version
const countDown = (num) => {
	for (var i = num; i > 0; i--) {
		console.log('count down: ', i);
	}
	console.log('All done!');
};
countDown(5);

// // Recursive Version
const countDownRecursive = (num) => {
	if (num <= 0) {
		console.log('All done!');
		return;
	}
	console.log('count down recursive: ', num);
	num--;
	countDownRecursive(num);
};
countDownRecursive(3);

// Calculate factorial of given number - recursive
const factorial = (n) => {
	if (n < 0) return 0;
	if (n <= 1) return 1;
	return n * factorial(n - 1);
};
console.log('factorial recursive: ', factorial(3)); // 6

// Calculate factorial of given number - iterative
const iterativeFactorial = (num) => {
	let result = 1;

	if (num === 0 || num === 1) {
		return result;
	}

	for (let i = 2; i <= num; i++) result = result * i;

	return result;
};
console.log('factorial iterative: ', iterativeFactorial(3)); // 6

// Flatten multi-layer arrays
const multiDimensionalArray = [1, [2, [3, [4, [5]]]]];
const flattenArray = (array) =>
	array.reduce((res, it) => {
		return res.concat(Array.isArray(it) ? flattenArray(it) : it);
	}, []);
console.log('flatten array with fn: ', flattenArray(multiDimensionalArray)); // [1, 2, 3, 4, 5]
console.log('flatten array with .flat(): ', multiDimensionalArray.flat(Infinity)); // [1, 2, 3, 4, 5]

// Check if an array of objects contains a value
const myOtherArray = [{ name: 'fatfish' }, { name: 'hello' }, { name: 'world' }];
const foundIndex = myOtherArray.findIndex((it) => it.name === 'hello'); // 1

// Array includes
const itemsArray = ['fatfish', 'medium', 'fe'];
const condition = 'medium';
console.log(itemsArray.includes(condition) ? 'includes condition' : 'does not include condition'); // includes condition

// Initialize an array of a fixed length and each item is “fatfish”
const initializedArray = Array(5).fill('arr');
console.log(initializedArray); // ['arr', 'arr', 'arr', 'arr', 'arr']

// Coercion
console.log(1 + '2' + '2'); // 122
console.log(1 + +'2' + '2'); // 32
console.log(1 + -'1' + '2'); // 02
console.log(+'1' + '1' + '2'); // 112
console.log('A' - 'B' + '2'); // NaN2
console.log('A' - 'B' + 2); // NaN
// == means that coercion is allowed to happen, while === is not.
// “10,11” == [[[[10]],11]] // 10,11 == 10,11, and: true
// "[object Object]" == {name: "test"} // true

// Find the maximum difference between 2 values in array
// Min value from left and Max value from right
const inputArray = [2, 7, 9, 5, 10, 33, 5];
const getDifference = (array) => {
	let diff = 0;
	let maxDiff = 0;

	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			diff = array[j] - array[i];
			if (diff > maxDiff) maxDiff = diff;
		}
	}
	return maxDiff;
};
getDifference(inputArray); // 31 // The pair is (2, 33)

// apply() vs call() vs bind()
const pokemon = {
	firstname: 'Pika',
	lastname: 'Chu ',
	getPokeName: function () {
		const fullname = `${this.firstname} ${this.lastname}`;
		return fullname;
	},
};
const pokemonName = function (snack, hobby) {
	console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};
// BIND
const logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now
logPokemon('cola', 'bind()'); // Pika Chu loves cola and coding
// CALL
pokemonName.call(pokemon, 'snacks', 'call()'); // Pika Chu loves sushi and algorithms
// APPLY
pokemonName.apply(pokemon, ['pizza', 'apply()']); // Pika Chu loves pizza and programming

// This
const person = {
	firstName: 'John',
	lastName: 'Doe',
	id: 5566,
	fullName: () => this.firstName + ' ' + this.lastName,
};

const myObject = {
	foo: 'bar',
	func: function () {
		var self = this;
		console.log('outer func:  this.foo = ' + this.foo);
		console.log('outer func:  self.foo = ' + self.foo);
		(function () {
			console.log('inner func:  this.foo = ' + this.foo);
			console.log('inner func:  self.foo = ' + self.foo);
		})();
	},
};
myObject.func();
//outer func:  this.foo = bar
//outer func:  self.foo = bar
//inner func:  this.foo = undefined
//inner func:  self.foo = bar

// Callback
// const clock = () => {
// 	const date = new Date();
// 	console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
// };
// setInterval(clock, 1000);
// clock();

/// CALLBACK EXAMPLE:
const greet = (name, callback) => {
	console.log(`Hi ${name}`);
	callback();
}; // function
const callMe = () => {
	console.log('I am callback function');
}; // callback function
greet('Peter', callMe); // passing function as an argument
// Output: Hi Peter
// I am callback function

// Promise
const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => resolve('promise done'), 1000);
	setTimeout(() => reject(new Error('Whoops!')), 1500);
}).then(
	(value) => console.log(value),
	(error) => console.log(error)
);

const exPromise = new Promise((resolve) => {
	setTimeout(() => resolve(3), 2000);
}).then((value) => {
	console.log('promised value: ', value);
});

const myAsync = async (num) => {
	const myPromise = new Promise((resolve) => {
		setTimeout(() => resolve(num), 1000);
	});

	try {
		const result = await myPromise;
		console.log(`Resolved with async/await ${result}`);
		return result;
	} catch (error) {
		console.log(error);
	}
};
myAsync(5);

// Event Loop
console.log('Event Loop: 1');
setTimeout(() => console.log('Event Loop: 2'), 3000);
setTimeout(() => console.log('Event Loop: 4'), 0);
console.log('Event Loop: 3');
// Output: 1, 3, 4, 2

// Event loop 2
console.log(1);
new Promise((resolve) => {
	console.log(2);
	return setTimeout(() => {
		console.log(3);
		resolve();
	}, 0);
});
setTimeout(() => console.log(4), 1000);
setTimeout(() => console.log(5), 0);
console.log(6);
// Output: 1 2 6 3 5 4
