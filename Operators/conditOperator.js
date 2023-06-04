//use of condition operator simplifies if else statement
const condition_operator = (x)=>{
    return x? "The value is true": "The value is false";
};
// console.log(condition_operator(1));
const conditionOperator = (y)=>{
    return y>10 ? "The value is true": "The value is false";
};
// console.log(conditionOperator(1));

//handiling null value using conditional operator

const intro = (person)=>{
    const name = person ? person.name : " a Random person"
    return `I am ${name} and i am a student`;

}
console.log(intro({name: "Gaurav pandus"}));
console.log(intro(null));

//conditional chains
const Check_cond = (val)=>{
    
const cond_val = val>0 ? val<3 ? "ok":"not ok":"negative"       //nested coditon operator
return cond_val;
};
console.log(`The condition is ${Check_cond(-4)}`);

//use of delete operator

const objx = {
    fname: "Gaurav",
    sname: "Pandus",
    age: 20
};
console.log(`The name is ${objx.fname} ${objx.sname}`);
delete objx.fname;                                                  //Deletes fname of object objx
console.log(`The name is ${objx.fname} ${objx.sname}`);             //It gives undefined in place of fname
