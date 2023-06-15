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
    // let sql = `select user.name as Name, marksheet.ID as RollNo,marksheet.Maths as MathsMarks
    // from user
    // right join marksheet on 
    // user.name=marksheet.Name;`;         //it gives value for all 6 students from marksheet though they may not be present in user
    // let sql = `create table studentsInfo(
    //     RollNO int not null auto_increment,
    //     Students_Name varchar(255),
    //     Address varchar(255),
    //     Remarks varchar(255),
    //     primary key(RollNO)
    //     );`;
    // let sql = `select * from studentsinfo`;

    // let sql = `insert into studentsinfo(Students_Name,Address)
    // values('Aaditya Khanal','swyambhu'),
    // ('Aayush Joshi','Satdobato'),
    // ('Bibek Regmi','ktm'),
    // ('Bibhushan Poudel','bkt'),
    // ('Rojan Dahal','brtnagar')`
    // let sql =   `delete from studentsinfo
    // where RollNo is null`;

    // let sql = `alter table studentsinfo
    // add Admission_date date`;

    // let sql = `update studentsinfo
    // set Admission_date='2080-01-01'
    // where Students_Name= 'Aaditya Khanal' and RollNo ='1'`;
    // let sql =`select * from studentsinfo`;
//     let sql = `update studentsinfo
//  set Admission_date='2080-01-02'
// where Students_Name= 'Aayush Joshi' and RollNo ='2'`;
// let sql = `update studentsinfo
//  set Admission_date='2080-01-09'
//  where Students_Name= 'Bibek Regmi' and RollNo ='3'`;
//  let sql = `update studentsinfo
//  set Admission_date='2080-01-11'
//  where Students_Name= 'Bibhushan Poudel' and RollNo ='4'`
let sql = `select * from studentsinfo`;


 
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);

    })

});
