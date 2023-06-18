import { writeFile, readFile } from 'fs';
// let data_content = "This is a file containing a collection of books.";
  
// //.writeFile is used to write data into the file 
// fs.writeFile("books.txt", data_content,{
//     encoding: "utf8",
//     flag: "w",
//     mode: 0o666
//   }, (err) => {      //fs.writeFile( file, data, options, callback )

//   if (err)
//     console.log(err);
//   else {
//     console.log("File written successfully\n");
//     console.log("The written has the following contents:");
//     console.log(fs.readFileSync("books.txt", "utf8"));
//   }
// });

const customer_id = {name:"Kaley", address:"Nepal", customerID:"123KL*"};

writeFile("books.txt",JSON.stringify(customer_id),{
    encoding: 'utf-8',
    flag:'a',       //control how the file will be created and written --w iswhich creates the file (if the file does not already exist) or overwrites whatever data the file has with the new data if file already exist
    mode:0o66       //The mode property sets the file mode (permissions)

},
(err)=>{
    if(err){
        console.log("file is not written");

    }
    else{
        console.log("File is successfully written ");
        console.log("The newly added data is");
        readFile("books.txt","utf-8",(err,data)=> {
            if(err){
                console.log("Error aayo");
            }
            else
            {
                console.log(JSON.parse(data));
            }
        
        
        }
        
        
        );
    }
})