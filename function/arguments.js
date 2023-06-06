//arguments doesnot work with arrow functions instead rest parameter is used

let argu =function(a,b,c){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);

};

argu(56,78,90);

function func1(a, b, c) {
    console.log(arguments[0]);
    // Expected output: 1
  
    console.log(arguments[1]);
    // Expected output: 2
  
    console.log(arguments[2]);
    // Expected output: 3
  }
  
  func1(1, 2, 3);