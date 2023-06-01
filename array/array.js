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
// console.log(array4.next().value);
// console.log(array4.next().value);

const thres = (element)=> element <99;      //tests whether all elements in the array pass the test and returns boolean
// console.log(array1.every(thres));
const array5 =  array1.fill(0,1,5); // put 0 from index 1 to 5
// console.log(array5);

const alpha = [ 'okey','Rameshwor','k xa','what','how'];
const filterfnc = (element)=> element.length<1;     // it is used to filter elements in thre array [creates a shallow copy of a portion of a given array]
// console.log(alpha.filter(filterfnc));

 const findvalue = (element)=> element.length>2;     //returns the first element in the provided array that satisfies the given condition
// console.log(alpha.find(findvalue));
// console.log(alpha.findIndex(findvalue));        // it returns the index of the first element that passes the test function
// console.log(alpha.findLast(findvalue));     // it reverses the value and returns value of first index
// console.log(alpha.findLastIndex(findvalue));        // it returns the index for above found value

const array6 = [1,2,3,1,5,7];
// console.log(array6.flat(2));        // it flats the array within an array  output: [(6) [1, 2, 3, 1, 5, 7]]

// console.log(array6.map(map_fnc));
// console.log(array6.flatMap(map_fnc));       //i did not understand the dif between this in details

const y = element => console.log(element);
// array6.forEach(y);      //it executes the provided function for each element in the array

// from creates  a new copy of array from array object
// console.log(Array.from('foooo'));
// syntax Array.from(arrayLike, mapFn)
// console.log(Array.from([1,2,4],x=>x*2));

// console.log(Array.fromAsync('asdf')) //it gave me error

// console.log(array6.includes(5));        //check if it is present or not

// console.log(array6.indexOf(3));  //gives index of the element present in the array
// console.log(array6.indexOf(123));           // gives -1 as output
// console.log(Array.isArray(array6));     //checks if the provided arg is array or  not

// console.log(array6.join('-'));          //output: 1-2-3-1-5-7
// console.log(array6.join('+'));          //output: 1+2+3+1+5+7
// console.log(array6.join('*'));          //output:1*2*3*1*5*7

// keys contains the keys for each index
const array7 = ['a','b','a','c'];
const array_key = array7.keys();
for(const i of array_key)
{
    // console.log(i);
}

// console.log(array7.lastIndexOf('a'))        //it returns thelast index :output : 2

// console.log(array7.pop());      //it permanently deletes the array contained
// console.log(array7);        // output : (3) ['a', 'b', 'a']  ---> 'c' has been removed by pop operation

array7.push('x');           // 'x'has been pushed into the array
// console.log(array7);        //output: (4) ['a', 'b', 'a', 'x']  ---> 'x' has been added into the array

const array8 = [1,2,3,4];

const initial = 0;

const Summation = array8.reduce(((store,init)=>store + init),initial );
console.log(Summation);         //it gives a single value as result at the end
// reducer  works on each element on the array returns a single value that has been calculated as a result from the previous call
const summation = array8.reduceRight(((element)=>element) );
const Initial = 1;

const result = array8.reduce(((store,init)=>store / init  ), Initial );  // process: ((((1/4)/3)/2)/1)  output: 0.041666666666666664

// console.log(summation);
console.log(result);


