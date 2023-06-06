// The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
//Nullish coalescing operator (??) it returns the right hand side value if the left hand side value is null or undefined,else lefthandside value is returned
//Null in JavaScript means an empty value
// done manually by the user as JavaScript never sets the value as null.
// Unlike null, the value of an undefined variable is set by JavaScript as undefined. 
//undefined is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.
let x=null;
let a;


// There are several ways in which NaN can happen:

// Division of zero by zero
// Dividing an infinity by an infinity
// Multiplication of an infinity by a zero
// Any operation in which NaN is an operand
// Converting a non-numeric string or undefined into a number
// // const y = x ?? "not okey";
// console.log(y);

console.log(typeof x)

console.log('5'+5);

const B=NaN;
console.log(B);
console.log(Number.isNaN(123));
console.log(Number.isNaN(-123));
console.log(Number.isNaN('hello'));
console.log(Number.isNaN(0/0));