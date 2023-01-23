const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let value;
value = firstName + lastName;

// Concatenation
value = firstName + ' ' + lastName; // William Johnson

// // concat()
// value = firstName.concat(' ', lastName); // William Johnson

// // Append
// value = 'Brad ';
// value += 'Traversy'; // Brad Traversy
// value = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// value = "That's awesome, I can't wait"; // That's awesome, I can't wait

// // Length
// value = firstName.length; // 7

// // Change case
// value = firstName.toUpperCase(); // WILLIAM
// value = firstName.toLowerCase(); // william

// value = firstName[2]; // l

// // indexOf()
// value = firstName.indexOf('l'); // 2
// value = firstName.lastIndexOf('l'); // 3

// // charAt()
// value = firstName.charAt('2'); // l

// // Get last char
// value = firstName.charAt(firstName.length - 1); // m

// // substring()
// value = firstName.substring(0, 4); // Will

// // slice()
// value = firstName.slice(0, 4); // Will
// value = firstName.slice(-3); // iam

// // split()
// value = str.split(' '); // ['Hello', 'there', 'my', 'name', 'is', 'Brad']
// value = tags.split(','); // ['web design', 'web development', 'programming']

// // replace()
// value = str.replace('Brad', 'Jack'); // Hello there my name is Jack

// // includes()
// value = str.includes('foo'); // false

console.log(value);
