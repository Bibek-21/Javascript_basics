//Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

// maps methods--> set, get, has, delete, clear, size

// const myFirstMap = new Map();
// myFirstMap.set(1,"firstNumber");
// myFirstMap.set('1',"firstString");
// myFirstMap.set(true,"firstBoolean");
// console.log(myFirstMap);        //Output for first  console: (Map(1) { 1 => 'first' }) output is different than object , the output shows the differences between map and object
// console.log(myFirstMap.get(1));
// console.log(myFirstMap.get('1'));
// console.log(myFirstMap.get(true));
// console.log(myFirstMap.get('ok'));                  //It outputs undefined


// console.log(myFirstMap.has(1));                     //It returns boolean value
// console.log(myFirstMap.has('1'));   
// console.log(myFirstMap.has(true)); 
// console.log(myFirstMap.has('ok'));     

// console.log(myFirstMap.delete(1));                    // It deletes the key/pair by key ie key =1, mark the difference that a and '1' are different keys
// console.log(myFirstMap);                               //Output: Map(2) { '1' => 'firstString', true => 'firstBoolean' }

// myFirstMap.clear();                                    // It clears all the key values in the map
// console.log(myFirstMap);                            //Output: Map(0) {}


// console.log(myFirstMap.size);                         //Output: 0 ie the map has zero elements
// 
//Map can also use objects as keys.

const Ram ={
    age: 24
};

const anyperson = new Map();
anyperson.set(Ram,"1w243");
// console.log(anyperson);


//map chaining

const gaurab = new Map();

gaurab.set('x','kto')
.set('y','ok xa ta');
// console.log(gaurab);

for(x of gaurab.keys()){
    console.log(x);
}

for(x of gaurab.values()){
    console.log(x);
}

gaurab.forEach((value,key,map) => {             //The parameters are opposite  focus in this loop and get clear
    console.log(`The element is ${key}--> ${value}`)
    
});

//Initialzation of map

const newmap = new Map(             //we can pass an array (or another iterable) with key/value pairs for initializatio
  [  [1,'ok bro'],
    [2,'not ok bro'],
    ['huh', 'ummm']
]
);

console.log(newmap.get(1));
console.log(newmap.get(2));

// object and map can be interchanged by using entries and fromentries
console.log(newmap);
console.log(Object.fromEntries(newmap));