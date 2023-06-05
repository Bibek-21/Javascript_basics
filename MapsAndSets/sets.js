//A Set is a special type collection (it is a type of object)– “set of values” (without keys), where each value may occur only once.

const setStudy = new Set();
setStudy.add('first');
setStudy.add('second');
setStudy.add('first');          //same value cannot be added
console.log(setStudy);
console.log(setStudy.delete('first'));      //It returns true as first is present in the set
console.log(setStudy);                      //Output: Set(1) { 'second' }
console.log(setStudy.has('second'));        //Output: true
setStudy.clear();
console.log(setStudy)               //Output: Set(0) {}
console.log(setStudy.size);         //Output: 0