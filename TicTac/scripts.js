

let turn = "X";

let Checkturn = () => {
    return turn == "X" ? "0" : "X"
    // return console.log("yeha xu la ma"); //ok
};
// let reset = () => {
//     document.getElementsByClassName("boxtext").innerText = "";
//     // document.getElementById("demo").innerHTML = "Hello World";
// }
// let gamefinish=()=>{
//     document.querySelector(".line").style.transform =`translate(${e[3]},${e[4]} rotate(${e[5]})`

// }
let reset = () => {
    Array.from(boxes).forEach(element => {

        const resetbtn = document.getElementById("mybtn");
        resetbtn.addEventListener('click',() => {
            let boxtext1 = element.querySelector(".boxtext");
        
            boxtext1.innerText = "";
        
        });
        });
        

}
let Checkwin = () => {
    // return console.log("yeha xu la ma"); //ok
    let boxtexts = document.getElementsByClassName("boxtext");
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    win.forEach(e => {
        // console.log("Yeha samma thik xa"); //ok

        if ((boxtexts[e[0]].innerText == boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText == boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText != "")) {
            document.querySelector('.info')[0].innerText = 'Winner is ' + boxtexts[e[0]].innerText;
            // console.log(boxtexts[e[0]].innerText); //checking
            reset();

            //    gamefinish();

        }
    })
}

// console.log(665);
let boxes = document.getElementsByClassName("box");
// console.log(boxes);



Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    // console.log(boxtext);
    // console.log("Yeha samma thik xa"); //ok

    element.addEventListener('click', () => {
        // console.log("Yeha samma thik xa"); //ok

        if (boxtext.innerText === '') {
            // console.log("Yeha samma thik xa");// ok

            boxtext.innerText = turn;
            // console.log(turn);
            turn = Checkturn();
            Checkwin();


        }
        // console.log( document.getElementsByClassName("info"));
        document.getElementsByClassName("info")[0].innerText = 'Turn for  ' + turn;


    });

});

reset();