function include(filePath) {
	const scriptTag = document.createElement('script');
	scriptTag.src = filePath;
	document.body.appendChild(scriptTag);
}

// include('arrays.js');
// include('constructors_and_this.js');
// include('es6_classes.js');
// include('functions.js');
// include('iterators_and_generators.js');
// include('loops.js');
// include('numbers.js');
// include('prototypal_inheritance.js');
// include('prototypes.js');
// include('strings.js');
// include('sub_classes.js');
// include('type_conversion.js');
// include('window_object.js');
// include('symbols.js');
// include('destructuring.js');
// include('es6_maps.js');
// include('es6_sets.js');
