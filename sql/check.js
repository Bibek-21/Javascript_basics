import "/sql/CreateConnection.js";

let
let sql =` insert into studentsinfo(Students_Name,Address,Admission_date)
values('Saman Shrestha','Bhaktapur','2080--1-09')`;
let checktable =`select * from studentsinfo`;
let deleterow = `delete from studentsinfo
where Students_Name = 'Saman Shrestha'`;

let Updateval = `update  studentsinfo
set RollNo ='6'
where Students_Name ='Saman Shrestha'` 

let rojanUpdate = `update studentsinfo 
set Admission_date ='2080-1-15'
where RollNo ='4'`;


connect.query(checktable,(err,result)=>{
if(err) throw err;
console.log(`The result for the given query is--->  `); 
console.log(result);

});







