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
Object.defineProperties()


  