// JavaScript modules are the most prevalently used design patterns for keeping particular pieces of code independent of other components. This provides loose coupling to support well-structured code. Modules are JavaScript “classes”. One of the many advantages of classes is encapsulation - protecting states and behaviors from being accessed from other classes. The module pattern allows for public and private (plus the lesser-know protected and privileged) access levels. Modules should be Immediately-Invoked-Function-Expressions (IIFE) to allow for private scopes - that is, a closure that protect variables and methods (however, it will return an object instead of a function).

// Basic structure
// (function () {
// 	// Declare private vars and functions

// 	return {
// 		// Declare public var and functions
// 	};
// })();

// STANDARD MODULE PATTERN
const UICtrl = (function () {
	let text = 'Hello World';

	const changeText = function () {
		const element = document.querySelector('h1');
		element.textContent = text;
	};

	return {
		callChangeText: () => {
			changeText();
			console.log(text);
		},
	};
})();

UICtrl.callChangeText();
// UICtrl.changeText(); // UICtrl.changeText is not a function
console.log(UICtrl.text); // undefined

// REVEALING MODULE PATTERN
const ItemCtrl = (function () {
	let data = [];

	function add(item) {
		data.push(item);
		console.log('Item Added....');
	}

	function get(id) {
		return data.find((item) => {
			return item.id === id;
		});
	}

	return { add, get };
})();

ItemCtrl.add({ id: 1, name: 'John' });
ItemCtrl.add({ id: 2, name: 'Mark' });

console.log(ItemCtrl.get(2)); // {id: 2, name: 'Mark'}
