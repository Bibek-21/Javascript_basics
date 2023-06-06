
function funktion(a){
    return function (b){            //It returns a function
        return a*b;

    }
}

let x = funktion(3)(4);
console.log(x);

//example from tutorials point
function createMultiplier(x) {
    return function(y) {
       return x * y;
    };
 }
 
 // Call the createMultiplier function and assign the returned function to a variable
 let double = createMultiplier(2);
 
 // Use the returned function to perform a calculation
 console.log(double(5));