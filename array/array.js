const array1 = [1,4,5,76,45];
const array2 = [2,4,6,8,10];


const filter_fnc = element => element>13;
// console.log(array1.filter(filter_fnc));

const map_fnc = x=> x*2;
// console.log(array1.map(map_fnc));
// array1.forEach(element=>console.log(element*2));//The forEach() method executes a provided function once for each array element.
// unlike map forEach returns undefine
// const value =array1.splice(0,1,'asd');
// console.log(value);
// console.log(array1);
// console.log(array1.at(1));
// const array3= array1.concat(array2);
// console.log(array3);
// const array4 = array1.copyWithin(4,3);
// console.log(array4);
// Expected output: Array [0, "a"]
const array4 = array1.entries();
console.log(array4.next().value);
console.log(array4.next().value);

const thres = (element)=> element <99;      //tests whether all elements in the array pass the test and returns boolean
console.log(array1.every(thres));
const array5 =  array1.fill(0,1,5); // put 0 from index 1 to 5
console.log(array5);

const alpha = [ 'Rameshwor','k xa','what','how'];
const filterfnc = (element)=> element.length<4;     // it is used to filter elements in thre array [creates a shallow copy of a portion of a given array]
console.log(alpha.filter(filterfnc));

const findvalue = (element)=> element.length>4;
console.log(alpha.find(findvalue));
