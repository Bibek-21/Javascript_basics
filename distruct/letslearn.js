var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

// Destructuring the object into variables without 
// assigning default values 
var { firstname, lastname, country } = employee;
console.log("Without setting default values")
console.log( firstname, lastname, country);

// Destructuring the object into variables by 
// assigning default values 
var { firstname = 'default firstname', 
      lastname = 'default lastname', 
      country = 'default country' } = employee;
console.log("\n After setting default values")
console.log( firstname, lastname, country);

let anyobjs = {
    first: "what",
    second: "are",
    third: "you",
    fourth: "upto?",
    fifth:"hey",
    sixth: "you",
    seventh:"yes"

};

let {first,second,third,fourth,...remain}=anyobjs;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(remain);

