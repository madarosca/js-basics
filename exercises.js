// Check if string is palindrome
const isPalindrome = (string) => {
	const parsedString = string.replace(/\W/g, '').toLowerCase();

	return parsedString === parsedString.split('').reverse().join('');
};
console.log('isPalindrome: ', isPalindrome('noon'));
console.log('isPalindrome: ', isPalindrome('apple'));

// Recursive solution
const isPalindromeRecursive = (str) => {
	if (str.length === 1) return true;
	if (str.length === 2) return str[0] === str[1];
	if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));

	return false;
};
console.log('is palindrome recursive: ', isPalindromeRecursive('noon'));
console.log('is palindrome recursive: ', isPalindromeRecursive('apple'));

// Check if string is an anagram
const validAnagram = (first, second) => {
	if (first.length !== second.length) return false;

	return first.split('').sort().toString() === second.split('').sort().toString();
};
console.log('is anagram: ', validAnagram('heart', 'earth'));

// Add all numbers up to specified n
const addUpTo = (n) => (n * (n + 1)) / 2;
console.log('add up to n:', addUpTo(5));

// Add all numbers up to n with for loop
const addUpToNumber = (num) => {
	let total = 0;

	for (let i = 0; i <= num; i++) {
		total += i;
	}
	return total;
};
console.log('add up to n with for: ', addUpToNumber(5));

// Determine if x is integer
const isInteger = (x) => (x ^ 0) === x;
console.log('is it integer: ', isInteger('3'));

// Calculate sum of all erray elements
const sumOfArray = (arr) => {
	let total = 0;

	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
};
console.log('sum of array elements with for: ', sumOfArray([1, 3, 5, 7]));

// Calculate sum with reduce
const sumOfArrayWithReduce = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('sum of array elements with reduce: ', sumOfArrayWithReduce([1, 3, 5, 7]));

// Calculate product of all erray elements
const productOfArray = (arr) => arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
console.log('product of array elements with for: ', productOfArray([1, 3, 5, 7]));

// Calculate double of each array item
const double = (arr) => {
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		newArr.push(2 * arr[i]);
	}
	return newArr;
};
console.log('double of each array element: ', double([1, 2]));

// Return the index at which the value exists, else return -1
const linearSearch = (arr, val) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === val) return i;
	}
	return -1;
};
console.log('return index of existent value: ', linearSearch(['apple', 'car', 'dog'], 'dog'));

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
console.log('how many unique values: ', countUniqueValues([1, 2, 2, 5, 7, 7, 99]));

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
console.log('first paur that adds to 0: ', sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));

// Calculate the sum of the first given elements
const maxSubarraySum = (arr, num) => {
	let maxSum = 0;

	if (arr.length < num) return null;

	for (let i = 0; i <= num; i++) {
		maxSum += arr[i];
	}

	return maxSum;
};
console.log('sum of subarray elements: ', maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 4));

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
console.log('check for duplicates in args: ', areThereDuplicates(1, 2, 3, 4, 5));

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

// Calculate factorial of given number
const factorial = (n) => {
	if (n < 0) return 0;
	if (n <= 1) return 1;
	return n * factorial(n - 1);
};
console.log('factorial: ', factorial(3));

// This
const person = {
	firstName: 'John',
	lastName: 'Doe',
	id: 5566,
	fullName: function () {
		return this.firstName + ' ' + this.lastName;
	},
};

// Callback
// const clock = () => {
// 	const date = new Date();

// 	console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds());
// };
// setInterval(clock, 1000);
// clock();

// Promise
const myPromise = new Promise((myResolve, myReject) => {
	// "Producing Code" (May take some time)
	myResolve(); // when successful
	myReject(); // when error
});
// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
	(value) => {
		/* code if successful */
	},
	(error) => {
		/* code if some error */
	}
);

// Async/Await
const myAsyncFunction = async () => {
	return 'Hello';
};
// vs Promise
const myPromiseFunction = () => {
	return Promise.resolve('Hello');
};

const myAsyncDisplay = async () => {
	const myPromise = new Promise(() => {
		setTimeout(function () {
			console.log('myAsyncDisplay');
		}, 1000);
	});

	const result = await myPromise;

	return result;
};
myAsyncDisplay();

// Event Loop
console.log('Event Loop: Hi');
setTimeout(function callback() {
	console.log('Event Loop: callback');
}, 5000);
console.log('Event Loop: Bye');
