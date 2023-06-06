x=5;             //asignment of x
console.log(x);     //variable read after declared
var x;
//Hoisting is JavaScript's default behavior of moving all declarations 
// to the top of the current scope (to the top of the current script or the current function).
//Variables defined with let and const are hoisted to the top of the block, but not initialized. 

// Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

// name="who are you?";            //Reference error   Cannot access 'name' before initialization
// let name;

// ok ="I am not okey";            //Syntax error  Missing initializer in const declaration
// const ok;

//The variables are hoisted but cannot be accessed , this period is called Temporal Dead Zone 