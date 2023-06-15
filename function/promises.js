//The Promise object represents the eventual completion (or failure)
//  of an asynchronous operation and its resulting value.
// let anyfunction = (aalu) => {
//     console.log(aalu);

// }
// let valuePromise = new Promise(function (myResolve, myReject) {        //producing code
//     let x = 12;
//     if (x == 0) {
//         myResolve("ok xa ta");          //when successsful
//     }
//     else {
//         myReject("not ok hai ta")       //when error
//     }
// });

// valuePromise.then(          //consuming code
//     function (value) { anyfunction(value) },       //code if successful
//     function (error) { anyfunction(error) }        //code is unsuccessful 
// );
//The .then() method takes up to two arguments;
//  the first argument is a callback function for the fulfilled case of the promise, 
//  and the second argument is a callback function for the rejected case.


// const Myfnc = (value) => {
//     console.log(`This is Myfnc ${value}`);
// }

// const karun = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let x = 7;
//         if (x == 0) {
//             resolve("It is zero");
//         }
//         else {
//             reject("It is non zero");
//         }

//     }, 1000);

// }
// );

// karun.then((value) => {
//     Myfnc(value);
// }

// );

// karun.catch((error)=>{
//     console.log("Error aako xa");
// });

// karun.finally(()=>{
//     console.log("Finally kam sakiyo");
// })
// we can use methods then(),cathch()and finally()
// catch()	Appends the rejection handler callback
// then()	Appends the resolved handler callback
// finally()	Appends a handler to the promise



    let dispfnc =(val)=>{
        console.log(`This is the value  ${val}`);
    };


    let eutaval = new Promise((resolve, reject) => {
        setTimeout(() => {
            let val = 999;
        if(val<90) resolve("Thik vayo calculation");
        else reject("Thik xaena calculation");
        
        }, 5000);

        
    });


    eutaval.then((result)=>{
        dispfnc(result)

    });

    eutaval.catch(()=>{
        console.log(`Error aayo ta yr`);
    })

    eutaval.finally(()=>{
        console.log(`Kaam Khatam Paisa Hajam`);
    })