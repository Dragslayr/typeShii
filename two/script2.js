let redBox = document.getElementById("red-box");
let body = document.querySelector("body");
let keyDn = document.getElementById("keyDn");
let counter = document.querySelector(".counter");
let enteredLetter = document.querySelector(".enteredLetter");



let cnt = 0;
keyDn.addEventListener("keydown", (e)=>{
    keyDn.classList.toggle("bg");
    cnt++;
    counter.textContent = cnt
    if(e.key === " ") enteredLetter.textContent = "SPACE";
    else enteredLetter.textContent = e.key;
})

