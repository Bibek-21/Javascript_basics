let mysql = require('mysql2');

let connection= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "bibek"
});

connection.connect((err)=>{
    if(err) throw err;
    console.log(`The connection has been successfully established`);


})

export * from createConnection.js;