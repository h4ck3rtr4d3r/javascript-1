
// Falsy (false)
// undefined
// null
// 0
// flase
// ''
// NaN

// Anything that is not Falsy -> Truthy

//Short-circuiting

let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);