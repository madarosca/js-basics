// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruits = ['banana', 'apple', 'orange', 'mango'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Index of - Returns the first index at which a given element can be found in the array, or -1 if it is not present
val = numbers.indexOf(36);
// Last index of - Returns the last index at which a given element can be found in the array, or -1 if it is not present
val = fruits.lastIndexOf('orange');
// Output: 4

// // To string - Returns a string representing the array and its elements
// fruits.toString();
// Output: "banana,apple,orange,mango"

// Push - Adds an element to the end of an array
// numbers.push(250);

// // Unshift - Adds an element to the beginning of an array
// numbers.unshift(120);

// // Pop - Removes and returns the last element of an array
// numbers.pop();

// // Shift - Removes and returns the first element of an array
// numbers.shift();

// // Reverse - Reverses the order of elements in an array
// numbers.reverse();

// // Splice values - Adds or removes elements from an array
// numbers.splice(1, 3);

// // Slice - Returns a new array with elements selected from the original array
// fruits.slice(1, 3);
// Output: ['apple', 'orange'];

// Concat - Combines two or more arrays into a new array
// val = numbers.concat(numbers2);

// // Join — Joins all elements of an array into a string
// fruits.join('-');
// Output: "banana-apple-orange-mango"

// Sorting arrays - Sorts the elements of an array in ascending order
// val = fruits.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function (x, y) {
// 	return x - y;
// });

// // Reverse sort
// val = numbers.sort(function (x, y) {
// 	return y - x;
// });

// // Find - Returns the value of the first element in the array that satisfies the provided testing function
// const over50 = (num) => num > 50;
// const found = numbers.find(over50);
// Output: 56

// // Find index - Returns the index of the first element in the array that satisfies the provided testing function
// const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
// Output: 1

// // Filter — Creates a new array with all elements that pass the test implemented by the provided function
// const filteredArray = numbers.filter(num => num % 2 === 0);
// Output: [56, 44, 36]

// // Map - Creates a new array with the results of calling a provided function on every element in the calling array
// const newArray = numbers.map((num) => num * 2);
// Output: [86, 112, 200, 46, 88, 72, 10]

// // Reduce - Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
// const sum = numbers.reduce((acc, num) => acc + num, 0);
// Output: 307

// // Reduce right - Applies a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
// const product = numbers.reduceRight((acc, num) => acc + num, 0);
// Output: 307

// // Foreach - Calls a provided function once for each element in an array, in order
// fruits.forEach((fruit) => console.log(fruit));
// Output: "banana" "apple" "orange" "mango"

// // Some - Returns true if at least one element in the array passes the test implemented by the provided function
// const hasEven = numbers.some((num) => num % 2 === 0);
// Output: true

// // Every - Returns true if all elements in the array pass the test implemented by the provided function
// const allEven = numbers.every((num) => num % 2 === 0);
// Output: false

// // Copy within - Copies a sequence of elements within the array.
// numbers.copyWithin(0, 3);
// Output: [43, 56, 33, 43, 56, 33]

// // Fill - Fills all the elements of an array from a start index to an end index with a static value
// numbers.fill(0, 2, 4);
// Output: [43, 56, 0, 0, 44, 36, 5]

// // Entries - Returns a new Array Iterator object that contains the key/value pairs for each index in the array
// const iterator = fruits.entries();
// console.log(iterator.next().value);
// // Output: [0, "banana"]
// console.log(iterator.next().value);
// Output: [1, "apple"]

// // Keys - Returns a new Array Iterator object that contains the keys for each index in the array
// const iterator = fruits.keys();
// console.log(iterator.next().value);
// // Output: 0
// console.log(iterator.next().value);
// // Output: 1

// // Values - Returns a new Array Iterator object that contains the values for each index in the array
// const iterator = fruits.values();
// console.log(iterator.next().value);
// // Output: "banana"
// console.log(iterator.next().value);
// Output: "apple"

// // At - Takes an integer value and returns the item at that index.
// fruits.at(1);
//Output: apple

// // Of - Creates a new Array instance with a variable number of arguments, regardless of the number or type of the arguments
// const array = Array.of(1, 'two', [3], { four: 4 });
// Output: [1, "two", [3], {four: 4}]

// // From - Creates a new Array instance from an array-like or iterable object
// const set = new Set([1, 2, 3, 4]);
// const array = Array.from(set);
// Output: [1, 2, 3, 4]
