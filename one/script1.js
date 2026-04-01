let body = document.querySelector("body");
let abcd = document.querySelectorAll(".abcd");
let first = document.querySelector(".first");
let second = document.querySelector(".second");
let noob = document.querySelector("#noob");
let cnt = abcd.length;
abcd.forEach(element => {
    element.innerText = cnt;
    cnt--;
});

let h1 = document.createElement("h1");
h1.innerHTML = "<b>BOOM!</b>"
first.append(h1);

let a = document.querySelector("a");
console.dir(a);
console.log(a.getAttribute("href"));
a.href = "https://youtu.be/QDia3e12czc?si=B1gjxguEm2x0grGS";
console.log(a.getAttribute("href"));

// a.style.backgroundColor = "red";
a.style.fontSize = "50px";
a.style.textDecoration = "none";
// a.addEventListener("mouseover", ()=>{
//     a.style.backgroundColor = "black";
//     a.style.color = "white";
// });
a.addEventListener("mouseenter", ()=>{
    a.classList.toggle("hulu");
})

let ulOdd = document.querySelectorAll("ul li:nth-child(2n+1)");
let ulEven = document.querySelectorAll("ul li:nth-child(2n)");
ulEven.forEach(element => {
        element.addEventListener("mouseenter", ()=>{
        element.classList.toggle("hulu");
    })
});
ulOdd.forEach(element => {
        element.addEventListener("mouseenter", ()=>{
        element.classList.toggle("luhu");
    })
});