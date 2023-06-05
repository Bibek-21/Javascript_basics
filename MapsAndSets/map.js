//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// maps methods--> set, get, has, delete, clear, size

const myFirstMap = new Map();
myFirstMap.set(1,"firstNumber");
myFirstMap.set('1',"firstString");
myFirstMap.set(true,"firstBoolean");
console.log(myFirstMap);        //Output for first  console: (Map(1) { 1 => 'first' }) output is different than object , the output shows the differences between map and object
console.log(myFirstMap.get(1));
console.log(myFirstMap.get('1'));
console.log(myFirstMap.get(true));
console.log(myFirstMap.get('ok'));                  //It outputs undefined


console.log(myFirstMap.has(1));                     //It returns boolean value
console.log(myFirstMap.has('1'));   
console.log(myFirstMap.has(true)); 
console.log(myFirstMap.has('ok'));     

console.log(myFirstMap.delete(1));                    // It deletes the key/pair by key ie key =1, mark the difference that a and '1' are different keys
console.log(myFirstMap);                               //Output: Map(2) { '1' => 'firstString', true => 'firstBoolean' }

myFirstMap.clear();                                    // It clears all the key values in the map
console.log(myFirstMap);                            //Output: Map(0) {}


console.log(myFirstMap.size);                         //Output: 0 ie the map has zero elements

//Map can also use objects as keys.

const Ram ={
    age: 24
};

const anyperson = new Map();
anyperson.set(Ram,"1w243");
console.log(anyperson);






