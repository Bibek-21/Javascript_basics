const isPrimeCheck =(number)=>
{
for (let i = 2; i < number; i++) {
 if (number % i == 0) {
      console.log(`The Enter Number is not Prime`);
            return false;
     }
return true;
}


}
let checktheflag=isPrimeCheck(23);
if(checktheflag==true)
{
    console.log(`This is a Prime`);
}