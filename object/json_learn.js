//JSON stands for JavaScript Object Notation
//JSON is text only data interchange format it can be written in any language
//A common use of JSON is to read data from a web server, and display the data in a web page.


//JSON data and value
// "firstname":"Ramekwal"  
// let any = {
//     employees:[
//         {firstname: "Ram",lastname: "Sharma"},
//         {firstname: "Shyam",lastname: "Shrestha"},
//         {firstname: "Sita",lastname: "KC"},              //This is a normal object

//     ]
// }
// let stringified_json = JSON.stringify(any);
// console.log(stringified_json);

// let text = '{ "employees" : ;[' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +         //This is a JSON object
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}'

// const obj = JSON.parse(text);
// console.log(obj);

let anytext = '{"name":"Hari","age":"12","gender":"male"}';
console.log(JSON.parse(anytext));