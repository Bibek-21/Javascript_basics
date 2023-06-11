const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "bibek"

});
connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    //    let sql =" select * from marksheet";
    //    let sql  = `insert into marksheet(ID,Name) values(1,"kapil chhatkuli")`;
    // let sql =`insert into marksheet(ID,Name,Maths,Science,Social,English,Nepali)
    // values('6','Kapil Chhatkuli','89','90','87','90','99');`
    // let sql = `select * from marksheet where Nepali>80`;
    //  let sql = `select * from marksheet order by ID`;

    // let sql = `update marksheet
    // set Name='Karun Bhandari',Maths=89,Science=90,Social=88,English=89,Nepali=90
    // where ID=8`;
    // let sql = `delete from  marksheet where ID=6`;
    // let sql = `delete from marksheet where ID = 7 or ID = 8 `
    // let sql =`drop table marksheet`;  //deletes all the table
//     let sql = `update marksheet 
// set Name= 'Rajan bhadel',Maths=78,Science= 87,Social= 93,English= 95,Nepali= 80
// where ID=5;
//   `
// let sql =  `select * from marksheet         
// limit 2`                        // katiota rows chaiyo limit willsay 

// let sql = `select * from marksheet limit 3 offset 2`;       //the limit 3 starts after 2 rows
// let sql = `delete from user where id=6;`;
// let sql = `select * from user`;
// let sql  = `delete from user where id = 3; `;

// let sql = `select user.name as Name, marksheet.ID as RollNo,marksheet.Maths as MathsMarks
// from user
// join marksheet on 
// user.name=marksheet.Name;`;          //join and innner join nare same
// let sql = `select user.name as Name, marksheet.ID as RollNo,marksheet.Maths as MathsMarks
// from user
// left join marksheet on 
// user.name=marksheet.Name;`;      //all the names of the user will be displayed though their values may be null
let sql = `select user.name as Name, marksheet.ID as RollNo,marksheet.Maths as MathsMarks
from user
right join marksheet on 
user.name=marksheet.Name;`;         //it gives value for all 6 students from marksheet though they may not be present in user
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);

    })
});
