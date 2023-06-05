const { log } = require('console');
const fs = require('fs');
// const { type } = require('os');

const x = [1,2];

const data = {
    bookID: 12364,
    bookName: "Chemistry",
    bookOwner: "Alish"
};

fs.writeFile("anyfile.txt",JSON.stringify(data),{
    flag: 'w',
    mode: 0o66,
    encoding:"utf-8"
},(err)=>{
    if(err){
        console.log("File could not be written");

    }
    else{
        console.log("File is written successfully");
        console.log("The information in file is");
        fs.readFile("anyfile.txt", (err,data)=>{
            if(err){
                console.log("File could not be read");
            }
            else{
                console.log(JSON.parse(data));
            }
            
        }
    
        )
    }
})

// console.log(typeof x);
// console.log(typeof data);