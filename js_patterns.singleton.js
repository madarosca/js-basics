// Singleton design pattern exposes a single instance that can be used by multiple components. We can create only one instance of a class and that instance can be accessed globally. It makes sure that the class acts as a single source of entry for all the consumer components that want to access this state. In other words, it provides a common entry point for using global state. - Redux, React Context

const Singleton = (function () {
	let instance;

	function createInstance() {
		const object = new Object({ name: 'Brad' });
		return object;
	}

	return {
		getInstance: function () {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		},
	};
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB); // true
console.log(instanceA); // {name: 'Brad'}
