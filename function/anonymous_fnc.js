const add = function(a,b){
    console.log("This is an anonymous function  \"Normal function\"");
    return a+b;
}
// const addition = (()=>{
//     console.log("This is an anonymous function  \"arrow function\" ");
//     return a+b;
// });
// addition(1,2);
const Person = {
    name: 'Karan Poudel',
    age: 21,
    position: 'second',
    details: function(){
        console.log("This is a")

    }
};
console.log(add(3,4));

(()=>{              //iife function is also an anaonymous function

console.log("This is also an anonymous function");
})();

setTimeout(() => {
    console.log("This is an output of the setTimeout function");
}, 5000);       //It will get executed ater 5000 milliseconds


(()=>{
    console.log(`The details of the person is ${Person.name}. He is  ${Person.age} years old and his position is ${Person.position}`)
})();