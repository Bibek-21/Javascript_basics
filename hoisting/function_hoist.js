// Declare an object


 let checker=()=> {
    const person = {
        firstName  : "John",
        lastName   : "Doe",
        id         : 5566,
     
      };  
  }



  let maker=()=>
  {
    return this.person;
  }
  console.log(maker());



let test = {
    greeting : "Hello",
    greetUser: function(user){
        return this.greeting+" "+user;
    }
}



console.log(test.greetUser("test"))

//for representing stack of block or scope
