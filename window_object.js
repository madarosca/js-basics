// WINDOW METHODS / OBJECTS / PROPERTIES

// Alert
//alert('Hello World');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

let myVal;

// Outter height and width
myVal = window.outerHeight;
myVal = window.outerWidth;

// Inner height and width
myVal = window.innerHeight;
myVal = window.innerWidth;

// Scroll points
myVal = window.scrollY;
myVal = window.scrollX;

// Location Object
myVal = window.location;
myVal = window.location.hostname;
myVal = window.location.port;
myVal = window.location.href;
myVal = window.location.search;

// Redirect
//window.location.href = 'http://google.com';
//Reload
//window.location.reload();

// History Object

// window.history.go(-2);
// myVal = window.history.length;

// Navigator Object
myVal = window.navigator;
myVal = window.navigator.appName;
myVal = window.navigator.appVersion;
myVal = window.navigator.userAgent;
myVal = window.navigator.platform;
myVal = window.navigator.vendor;
myVal = window.navigator.language;

console.log(myVal);
