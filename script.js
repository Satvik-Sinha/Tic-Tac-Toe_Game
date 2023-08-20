console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;
var cnt=0;
// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Functin after winning the game
const wonGame = (boxtext,e) =>{
    document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            let winBgColor=(Math.floor(Math.random()*(160000-99999) + 99999));
            document.body.style.backgroundColor='#'+winBgColor;
            console.log(winBgColor);
            // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            // document.querySelector(".line").style.width = "20vw";
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

        // [0, 1, 2, 5, 5, 0],
        // [3, 4, 5, 5, 15, 0],
        // [6, 7, 8, 5, 25, 0],
        // [0, 3, 6, -5, 15, 90],
        // [1, 4, 7, 5, 15, 90],
        // [2, 5, 8, 15, 15, 90],
        // [0, 4, 8, 5, 15, 45],
        // [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") )
        {
            wonGame(boxtext,e);
        }
        else if(!isgameover && cnt==9)
            {
                document.querySelector('.info').innerText = "The Game is Drawn"
                isgameover=true;
                gameover.play();
            }
    })  
}


// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '' && !isgameover){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            cnt++;
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false;
    cnt=0;
    // document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.body.style.backgroundColor='';
})

