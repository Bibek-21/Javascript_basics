 function function_nam(a,b)
{
    const add = a+b;
    return add;
}

let outcome = function_nam(4,5);
// console.log(outcome);

function fact(x){
    return x<2 ? 1 : x * fact(x-1);     //factorial function
}

// console.log(fact(3));       //3*2*1 Output:6


const factorial = function facts(x){        //factorial using if else condition
    if(x==0||x==1)
    return 1;
    else
    return x * facts(x-1);

};
// console.log(factorial(4));
// let y;
// const is_Prime = function prime_number(n){
//     for( let i = 2; i > n/2; i++){
//         y = n % i;
//         if(y==0){
//         // flag = false;
//         console.log("The number "+ n + "  is not a prime number");

//         break;
//         }
//         else{
        
//             console.log("The number "+ n + "  is  a prime number");
            
//         }

//     }

// };


// const is_Prime = function prime_number(n){
//     for(let i = 2; i < n/2; i++)
//     {
//         if(n%i == 0){
//             console.log("The number "+ n +" is not a prime number");
//             break;
//         }
//         else if(n%i==1){
//             continue;
//         }
        
        
//     }
// }

// is_Prime(5);

console.log("sum is " + Sum(2,3));
function Sum(a,b){
    return a+b;
}