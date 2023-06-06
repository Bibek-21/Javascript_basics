"use strict";
// x=12;            //x is not declared but assigned with value 
// console.log(x)

class Animal{
    constructor(name,age){
         this.name=name;
         this.age = age;

    }

    species(){
        return this.name;
    }
}

class Bird extends Animal{
    constructor(name,speed){
        super(name);                    //super() method in the constructor method, we call the parent's constructor method 
        this.speed = speed;
    }
    characteristics(){
        return `This is a bird of species --> ${this.species()} and speed is  ${this.speed} `
    }

}

const cow = new Animal("holy cow",12);          //Creatig an object
console.log (cow.species());

const parrot = new Bird("Green",12);
console.log(parrot);


// static method

class schools{
    constructor(name,year){
        this.schoolName = name;
        this.foundYear = year;
    }

    static affiliated(){
        return `This ia affiliated under "Nepal Education Board"`
    }
}
console.log(schools.affiliated());