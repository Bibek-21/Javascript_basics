// "I will call back later!"
//we pass fuction as an argument in a function
//code by mentor sir
// let mean=(value)=>{
//     return  value/2;

// };

// let add=(a,b,mycallback)=>{
//     let sum=a+b;
//     return mycallback(sum);
// };

// add(4, 5, (result) => {
//     let x = mean(result);
//     console.log(`The mean of two given numbers is ${x}`);
//   });
// // let x= add(4,5,mean)
// console.log(`The mean of two given numbers is${x}`);


//code by kapil--
// let mean=(value)=>{
   
//     return  value/2;

// };

// let add=(a,b,mycallback)=>{
//     let sum=a+b;
//    return  mycallback(sum);
// };

// let x= add(10,10,mean);
// console.log(`The mean of two given numbers is  ${x}`);


// callback function to calculate median 
let median =(arr,index)=>{
    let value = arr[index-1];
    return value;

};
let calculation = (array1,callback)=>{
    let i = array1.length;
    let nthterm = (i+1)/2 ;
    return callback(array1,nthterm);
};
let ascendingOrder=(array)=>{
    return array.sort(function(a, b){return b-a});
}

let GaurabArray = [1,2,3,4,5];


let y =calculation(ascendingOrder(GaurabArray),median);
console.log(y);