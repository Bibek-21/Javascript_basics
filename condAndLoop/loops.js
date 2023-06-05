// for (const a of b )
// {
//     //best loop
// }
/* for (let index = 0; index < array.length; index++) {             //syntax
    const element = array[index];
    
}
*/


const computer_dept ={
    block:'Block A',
    teachers: 12,
    students: 30
};
// console.log("The object attributes are :-")
// for(key in computer_dept){
//     console.log(` ${key}  :  ${computer_dept[key]}`);
// }

let student_roll = new Array(1,2,3,4,5,6,7);
// console.log("The students rollno's are : ")
// for(element in student_roll){                   //for ... in is preferred in object over arrays as it is slower in arrays
//     console.log(element);
// }

for(x of student_roll){
    x<4  ? console.log(` ${x}-->Group A`) : console.log(`${x}-->Group B`);
}
