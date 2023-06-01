"use strict"
const student1 = {
    name: "Ram",
    class: "X", 
    Rollno: 12,
    marks(){
    // console.log("Hello World");
    return "Whats up?";
    },

};
// console.log(student1.name);
student1.marks();
// console.log(student1.marks());
const x = new Object();
x.name = "Shyam";
// console.log(x);

const A = {
    a: "Appp",
    b:12,
    c:13,
};

const B ={
    d: "text",
    e: "ok",
    f: 3,
};

const C = Object.assign(A,B); //Object.assign(target,source) assigns value from source to target

// console.log(C);
// console.log(C===A);// The object is changed[It returns the modified target object.]

const person ={
    ID : "ax12g",
    add: "KTM",
    Roll: 12,
    Qualification : function() {
        console.log("The person is "+ this.firstName +" "+ this.lastName);

    }   
};

const D = Object.create(person);  // create() is used to create a new object using the existing object
D.firstName ="Harri";
D.lastName = "Prasad";
// console.log(person.ID);
// D.Qualification();
const object1 = {};

Object.defineProperties(object1,
    {
        property1: {
            value: 42,
            writable: true
          },
          property2:{
            value: 12,
            writable: false
          }

    }
);
// console.log(object1.property2)  ;

const environ = {
    a: "What",
    b: "chill"
};


for(const[k,v] of Object.entries(environ))      // it returns an array of object enumerables
{
    console.log(k+":"+v);
}
Object.freeze(environ); // it gets freezed and it cannot be changed
// environ.a = "When"; // it gives an error [cannot assign to read only propety a...]
// console.log(environ.a);

//fromEntries() changes key-value pair  into object
 const teacher = new Map(
    [[ "a" , "b"],
     [ "c" ,"d" ], 
     ["e","f"]]
 ) // Map must be used in this case
//  console.log(Object.fromEntries(teacher));

 const obj1 = {
    property3: 12,
    property4 : "ohh ok"

 };

 const ab = Object.getOwnPropertyDescriptor(obj1,'property3'); // mark that property is under single inverted comma
//  console.log(ab); //it only gives property of property of property3
 const ac = Object.getOwnPropertyDescriptors(obj1) // it gives all the properties
//  console.log(ac); // it gives property of all properties in the object

 const ad = Object.getOwnPropertyNames(obj1); // gives object properties names
 const ae = Object.getOwnPropertySymbols(obj1); // it gives symbols of the attribute in the object
//  console.log(ad);
//  console.log(ad.length); 
 //getPrototypeof is used to check the prototype ofobject as in below
 const af={ };
 const ag = Object.create(af);
 const ah = Object.create(ab);

//  console.log(Object.getPrototypeOf(ag)===af); // they both have same prototype :true
//  console.log(Object.getPrototypeOf(ah)===af); // they have different prototype:false
//hasOwn checks if property is present or not
// console.log(Object.hasOwn(obj1,'property3')); //returns true
// console.log(Object.hasOwn(obj1,'property2')); //returns false
//Object.is()is use to check if two values are same or not
// console.log(Object.is(1,1));
// console.log(Object.isExtensible(environ));
Object.preventExtensions(ag);       //it prevents extensible it allows changes within existing properties
// console.log(Object.isExtensible(ag));
// console.log(Object.isFrozen(environ)); //environ was previously froozen
//seal freeze prevetExtensiions are interrelated
const prevent = {
    property: "FSD"
};
Object.seal(prevent);
console.log(Object.isSealed(prevent));

const AH = {};
const AI = {            //object made
    type: "ok",
    caste: 12,
    machine:(a,b)=>{
         return (a+b);
    }
};
console.log(AH.type);   // it gives undefined as it has no value
Object.setPrototypeOf(AH,AI);       // it sets the prototype of AI to AH
console.log(AH.type); // it gives ok
const xyz= 1234.5634;
console.log(xyz.toLocaleString('de-DE'));

function Cat(name){
    this.name = name;
}
const cat1 = new Cat('Aalu');
Cat.prototype.tostring = function CatToString(){        //it returns a string representing an object
    return this.name;
}

console.log(cat1.tostring());
console.log (Object.keys(AI));      // it returns the keyed propert name in the object AI

console.log(Object.values(AI));     // it returns the property values in the object
console.log(AI.machine(1,2));