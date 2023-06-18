import { peoples as people } from "./defininingArray.js";
import { filval as fncs} from "./defFunction.js";

console.log(`The values using forEach loop in the array are enlisted below: `);
people.forEach(element => {
    console.log(`${element}`);
});


console.log(`The vaues using for loop  in the array are enlisted below:`);
for (let i = 0; i < 6; i++) {           //it has access to index rather than values in the array
    const element = people[i];
    console.log(element);
    
}

console.log(`The vaues using for-in  loop  in the array are enlisted below:`);

for(let i in people){
    const element = people[i];
    console.log(element);
}

console.log(`The vaues using for-of loop  in the array are enlisted below:`);

for( let x of people){
    console.log(x);
}


console.log(people.filter(fncs));