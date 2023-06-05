let x = Array(1,2,3,4,5);
let y =Array(3);
y=[1,2];

// console.log(x);
// console.log(y);
let index = 2;
console.log(`The element at index ${index} is ${x.at(index)}`);

// console.log(x.concat(y));

// console.log(x.copyWithin(0,2,3));


let ent = x.entries();          //key value pair

// console.log(ent.next().value);

const condCheck = (x)=>{
    x>3 ? console.log("true"): console.log("false");
}
// x.every(condCheck);

// console.log(x.fill('xk',2,4));

// console.log(x.pop());
// console.log(x.push(3,2));
// console.log(x);

const arrayx = ["Rameshwor","Sita","Gita","Binita"];
const filterfnc = (val)=> val.length<5;

// console.log(`The word with letters less than 5 is   [ ${arrayx.filter(filterfnc)} ]`);
// console.log(`The first word with letters less than 5 is   [ ${arrayx.find(filterfnc)} ]`);
// console.log(`The first word index with letters less than  is   [ ${arrayx.findIndex(filterfnc)} ]`);
// console.log(`The last word with letters less than  is   [ ${arrayx.findLast(filterfnc)} ]`);
// console.log(`The last word index with letters less than  is   [ ${arrayx.findLastIndex(filterfnc)} ]`);



let arrayy =[1,23,5,8,1,4,5];
// console.log(arrayy.flat(2));
const arr1 = [1, 2, 1];

// const resu2lt = arr1.flatMap((num) => (num === 2 ? [[2, 2]] : 1));

// console.log("This is",resu2lt);

console.log(arrayy.indexOf(23));
console.log(Array.isArray(arr1));

// const anyfnc=(element)=>{ 
//     element+2}
// const result = arr1.flatMap(anyfnc)
// console.log(result);

