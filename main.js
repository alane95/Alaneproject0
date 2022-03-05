const feedEl = document.getElementById("feed-btn");
const playEl = document.getElementById("play-btn");
const sleepEl = document.getElementById("sleep-btn");
// console.log(feedEL);
const myCountO = document.getElementById("feed-count")
// console.log (myCountO)
const myCountT= document.getElementById("play-count")
const myCountH = document.getElementById("sleep-count")
// console.log("hi");
const startButton = document.getElementById("start-button")
console.log(startButton);
let num= 0;
let myCount = null;

// console.log(myCountO.innerText)

// myCountT.innerText=num;
// myCountH.innerText=num;
// let intervalFunc = setInterval(function(){
//   num++;
//   console.log(num);
// }, 1000);
let started = false;

function buttonStart() {
  if(!started){
    myCount = setInterval(function(){
      num++;
      stopMyCount()
      myCountO.innerText= num;
      myCountT.innerText= num;
      myCountH.innerText= num;
      started = true;
    },1000);
  }
}
function pFood(){
   if (num >1 ){
      num--
    myCountO.innerText= num;
   }
}
function stopMyCount() {
  if (num >= 10){
    clearInterval(myCount)
  
    console.log("hi");
  
  }
}

  
const myplay=()=>{
    // console.log(myplay);
   if (num >1 ){
      num--
    myCountO.innerText= num;
   }
}
const dosleep=()=>{
 if (num >1 ){
      num--
    myCountO.innerText= num;
   }
 
}

feedEl.addEventListener('click', pFood);
playEl.addEventListener('click', myplay);
sleepEl.addEventListener('click', dosleep);
startButton.addEventListener('click', buttonStart);





