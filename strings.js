const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let value;

value = firstName + lastName;

// Concatenation
value = firstName + ' ' + lastName;

// Append
value = 'Brad ';
value += 'Traversy';

value = 'Hello, my name is ' + firstName + ' and I am ' + age;

// Escaping
value = "That's awesome, I can't wait";

// Length
value = firstName.length;

// concat()
value = firstName.concat(' ', lastName);

// Change case
value = firstName.toUpperCase();
value = firstName.toLowerCase();

value = firstName[2];

// indexOf()
value = firstName.indexOf('l');
value = firstName.lastIndexOf('l');

// charAt()
value = firstName.charAt('2');
// Get last char
value = firstName.charAt(firstName.length - 1);

// substring()
value = firstName.substring(0, 4);

// slice()
value = firstName.slice(0, 4);
value = firstName.slice(-3);

// split()
value = str.split(' ');
value = tags.split(',');

// replace()
value = str.replace('Brad', 'Jack');

// includes()
value = str.includes('foo');

console.log(value);
