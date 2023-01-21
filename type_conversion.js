let example;

// Number to string
example = String(555);
example = String(4 + 4);
// Bool to string
example = String(true);
// Date to string
example = String(new Date());
// Array to string
example = String([1, 2, 3, 4]);

// toString()
example = (5).toString();
example = true.toString();

// String to number
example = Number('5');
example = Number(true);
example = Number(false);
example = Number(null);
example = Number('hello');
example = Number([1, 2, 3]);

example = parseInt('100.30');
example = parseFloat('100.30');

// Output
// console.log(example);
// console.log(typeof example);
// console.log(example.length);
// console.log(example.toFixed(2));

const example1 = String(5);
const example2 = 6;
const sum = Number(example1 + example2);

console.log(sum);
console.log(typeof sum);
