const test = ()=>
{
    // return console.log(`Testing worldf`);
}

// console.log(test());
const ax1 = (a,b)=>
{
    let compt = a+b/b;
    return compt;

}
// console.log(ax1(2,4));
// during calculation of bitwise operator the decimal is converted into 32 bit binary 
const and_calc = (a,b)=>{                  
    return a&b;
};                                          // logic of and is: output is true only iff both the inputs are true
console.log(and_calc(2,8));                 //   2 = ..0010 and 8= ...1000  so output is ..0000 ie 0

const or_calc = (a,b)=>{                    //logic of or is: output is true if atleast one input is true
    return a|b;
};
console.log(or_calc(2,3));                  //2 = ..10 and and 3 = ...11 so output is 11 ie 3

const not_calc =(a)=>{
    return ~a;
};
console.log(not_calc(2));  

const xor_calc = (a,b)=>{                   //xor logic is different input gives true output
    return a^b;
};
console.log(xor_calc(2,4));


const comma_operator =  (a,b)=>{            //evaluates each of its operands (from left to right) and returns the value of the last operand
    return (a,a+b);
};
console.log(comma_operator(2,4));

//use of condition operator simplifies if else statement
const condition_operator = (x)=>{
    return x? "The value is true": "The value is false";
};
// console.log(condition_operator(1));
const conditionOperator = (y)=>{
    return y>10 ? "The value is true": "The value is false";
};
console.log(conditionOperator(1));