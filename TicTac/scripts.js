
let turn = "X";

let Checkturn =()=>{
    return value =="X"?"0":"X"
};

let checkWin= ()=>{

}

// let Clicked =

console.log("kapilesh");
let boxes = document.getElementsByClassName("boxtext");
console.log(boxes);

boxes.forEach(element=>{
    let e= element.querySelector(".boxtext");
    element.addEventListener('click',()=>{0.
        if(e.innertext===''){
           e.innertext=turn;
           Checkturn();
           checkWin();
        }
        document.getElementsByClassName("info").innertext= 'Turn for' + turn;
    });

});
