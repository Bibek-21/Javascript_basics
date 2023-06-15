let myObj = Symbol();

let object1 =  {
    [myObj]:'This is a random message'
};

// console.log(myObj);

// console.log(object1[myObj]);        //symbol is not called with . but [] is used

let randomObject = {
    name:'okok',
    gend: 'female',
    age: 19
};

// console.log(randomObject.name);
// console.log(randomObject.gend);
// console.log(randomObject.age);
//constructor function
// Constructors are special functions that are used to create objects.

function car(name,year,km){
    this.name = name,
    this.year = year,
    this.km = km

};
//Object banauna ko lagi use hunxa

let car1 = new car('Toyota',2012,100);
// console.log(car1);

// console.log(typeof car);

// console.log(typeof car1);
// console.log(Object.keys(car1));
// console.log(Object.values(car1));

