const array1 = [1,4,5,76,45];

const filter_fnc = element => element>13;
// console.log(array1.filter(filter_fnc));

const map_fnc = x=> x*2;
console.log(array1.map(map_fnc));

array1.forEach(element=>console.log(element*2));//The forEach() method executes a provided function once for each array element.
//unlike map forEach returns undefine
const value =array1.splice(0,1,'asd');
console.log(value);
console.log(array1);
