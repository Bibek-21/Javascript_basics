/*
"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise 

async ensures that the function returns a promise
 i.e. await literally suspends the function execution until the promise settles
awaits works inside the async function      
*/


 async function  fnc(){
    let x= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("This should be shown after 4 seconds")
        }, 3000);
    });
    console.log("Yo message before await ho ");

    let result = await x;
    console.log(result);
    console.log("Yo message k hola ta heram na");

 }

 fnc();
