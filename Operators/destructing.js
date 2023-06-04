// destructing makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
//Array destructing 

let a,b,cont;
[a,b]=[0,20];
// console.log(a);     //Output: 0
// console.log(b);     //Output: 20
[a,b,...cont] = [10,20,30,40,50];
// console.log(cont);          //Output: [ 30, 40, 50 ]
//
[a=2,b,...cont]= [,20,30,40,50];        //a is given a default value
// console.log(a);
[a, , b,...cont] = [10,20,80,40,50];
// console.log(`   ${a}  ${b} `);
// console.log(` ${cont}`);

[a,b,...{pop,push}] = [2,3,4,5,6];
console.log(` Array is  ${a}  ${b} `);
// console.log(pop,push);  
[a,b,...[c,d,...x]] = [2,3,4,5,6,7,8,9];
console.log(c,d);
console.log(x);
const anyobj = { name:"xyz", custom_id}



