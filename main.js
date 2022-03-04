console.log("it's workin");


const feedEL = document.getElementById("food");
const playEL = document.getElementById("game");
const sleepEL = document.getElementById("sleepy");
// console.log(feedEL);
const myCountO = document.getElementById("count-1")
const myCountT= document.getElementById("count-2")
const myCountH = document.getElementById("count-3")
// console.log("hi");
let num= 0;
let counter = null;

// console.log(myCountO.innerText)

// myCountT.innerText=num;
// myCountH.innerText=num;


function pFood(){
    // console.log(pFood);
    counter = setInterval(function(){
    num++;
    myCountO.innerText= num;
},1000);
    // console.log(num)
}
const myplay=()=>{
    console.log(myplay);
}
const dosleep=()=>{
    console.log(dosleep);
}

feedEL.addEventListener('click', pFood);
playEL.addEventListener('click', myplay);
sleepEL.addEventListener('click', dosleep);




