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
//     for(let i = 2; i < n; i++)
//     {
//         if(n%i == 0){
//             console.log("The number "+ n +" is not a prime number");
//             break;
//         }
//         else if(n%i==1){
//             console.log("The number "+ n +" is not a prime number");
//             return
         
//         }
        
        
//     }
// }

// is_Prime(6);

console.log("sum is " + Sum(2,3));      //example of hoisting function is called before declared Output:sum is 5
function Sum(a,b){
    return a+b;
}

// console.log(diff(5,2));     // ReferenceError: Cannot access 'diff' before initialization
 //Function hoisting only works with function declarations — not with function expressions
const diff = function cal_diff(a,b){ 
    return a-b;
};

function mean(){
    const num1 = 5;
    const num2 = 10;
    function add(){
        let sum = num1 + num2;
        return sum;
        
    }
    // return sum/2;

}
// console.log(mean());


// //function within a function
// function outer(){           
//     const x = 3;
//     const y  = 4;
//     function inner(a){          //not needed to pass any value to the function outside from outside function
//         return a * x * y;           //inner function has access to the outer functon value

//     }
//     return inner;
// }
// // console.log(outer()(2));


// const first = function first_name(f_name){
//     const second = function second_name(s_name){
//         return console.log(`${f_name} ${s_name}`);
//     };
//     return second;
// };

//  first('ram')('sharma');


    // let sx;
    // const cat_det = {
    //     setName(newname){
    //         name = newname;
    //     },
    //     getName(){
    //         return name;
    //     },
    //     getSex(){
    //         return sx;
    //     },
    //     setSex(newsx){
    //         if((typeof (newsx) =="string") && (newsx.toLowerCase() === "male")|| (newsx.toLowerCase()==="female"))
    //         {
    //           let sxxx="test";
    //             console.log(sxxx);
    //         }

    //     }
    // };
  



// const cat_det = createName("joey");
// console.log(cat_det.getName());
// cat_det.setName("Okli");
// console.log(cat_det.getName());


console.log(cat_det.setSex("male"));          //this didnot work as expected



const isPrimeCheck=()=>
{
    
}