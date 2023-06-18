/*
"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise 

async ensures that the function returns a promise
 i.e. await literally suspends the function execution until the promise settles
awaits works inside the async function      
*/


//  async function  fnc(){
//     let x= new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("This should be shown after 4 seconds")
//         }, 3000);
//     });
//     console.log("Yo message before await ho ");

//     let result = await x;
//     console.log(result);
//     console.log("Yo message heram na");

//  }

//  fnc();


 let message = async (a,b)=>{
    c=b/a;
    let pm = new Promise( (resolve,reject)=>{
        setTimeout(() => {
           
            if(c>0||c<0) resolve(`The value of result is ${c}  (line 35)`);
            else reject(`The value  ${b} is zero enter any other number and try again (line 36)`);
            
        }, 1000);

console.log("not ok");
    })

    // let wait = await pm;       //waits for the value of pm 
    // console.log(wait);

    // console.log(`Asynchronous code execution (line 46)`);
 };


//  message(19);

 message(9,9);


