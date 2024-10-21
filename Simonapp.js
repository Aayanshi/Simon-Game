let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns=['yel','re','gre','pur'];

let h2 = document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp()
    }
    
});

function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },300);

}

function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);

}

function levelUp(){
    userSeq =[];
    level ++;
    h2.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randCol = btns[randIdx];
    let randBtn = document.querySelector(`.${randCol}`)

    gameSeq.push(randCol);
    console.log(gameSeq);
    // console.log(randIdx)
    btnFlash(randBtn);
    
}

// it will check on game seq = user seq
function checkAns(idx){
    // console.log(`cur level ${level} `) //cur level hi size hoga game seq and col seq ka
    // let idx = level-1;

    if(userSeq[idx]== gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1000);
        }
        // console.log('same value');
    }else {
       h2.innerHTML = `Game Over! Your score was <b> ${level} </b> <br> <u>Press any key to Re-Start </u>`; 
       document.querySelector('body').style.backgroundColor ='red';
       setTimeout(function(){
        document.querySelector('body').style.backgroundColor ='white';
       }, 250)
       reset();
    }

}

function btnpress() {
    // user
    //  console.log(this);
    let btn = this;
    userFlash(btn)
    
    userCol = btn.getAttribute('id');
    userSeq.push(userCol);
    // console.log(userCol);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click',btnpress);
    
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;

}