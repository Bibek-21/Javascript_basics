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
console.log(object1.property2)  ;

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
console.log(environ.a);

//fromEntries() changes key-value pair  into object
 const teacher = new Map(
    [[ "a" , "b"],
     [ "c" ,"d" ], 
     ["e","f"]]
 ) // Map must be used in this case
 console.log(Object.fromEntries(teacher));

 const obj1 = {
    property3: 12,
    property4 : "ohh ok"

 };

 const ab = Object.getOwnPropertyDescriptor(obj1,'property3'); // mark that property is under single inverted comma
 console.log(ab);
 const ac = Object.getOwnPropertyDescriptors(obj1)
 console.log(ac);
