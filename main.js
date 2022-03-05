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
      myCountO.innerText="Hunger " + num;
      myCountT.innerText="Boredom " + num;
      myCountH.innerText="Sleepiness " + num;
      started = true;
    },2000);
  }
}
function pFood(){
   if (num >1 ){
      num--
    myCountO.innerText= "Hunger " + num;
   }
   if  (document.getElementById("imgClickAndChange").src == "https://i.pinimg.com/originals/ae/a5/50/aea5503452ac0387b5fea012197e56cb.gif") 
   {
       document.getElementById("imgClickAndChange").src = "https://i.pinimg.com/originals/55/5c/39/555c39d22c91d954f2892e99bb71e265.gif";
   }

   
}
const myplay=()=>{
    // console.log(myplay);
   if (num >1 ){
      num--
    myCountT.innerText="Boredom " + num;
   }
   if  (document.getElementById("imgClickAndChange").src == "https://i.pinimg.com/originals/ae/a5/50/aea5503452ac0387b5fea012197e56cb.gif") 
   {
       document.getElementById("imgClickAndChange").src = "https://thumbs.gfycat.com/FlamboyantSpiritedBelugawhale-size_restricted.gif";
   }

}
const dosleep=()=>{
 if (num >1 ){
      num--
    myCountH.innerText="Sleepiness" + num;
   }
   if  (document.getElementById("imgClickAndChange").src == "https://i.pinimg.com/originals/ae/a5/50/aea5503452ac0387b5fea012197e56cb.gif") 
   {
       document.getElementById("imgClickAndChange").src = "https://thumbs.gfycat.com/TimelyInferiorAcouchi-max-1mb.gif"; 
    //    element.className = element.className === 'highlight' ? '' : 'highlight';
   }

}

function stopMyCount() {
    if (num >= 10){
      clearInterval(myCount)
    // num =0;
      // console.log("hi");
    }
    else  {
        return;
    }
}

feedEl.addEventListener('click', pFood);
playEl.addEventListener('click', myplay);
sleepEl.addEventListener('click', dosleep);
startButton.addEventListener('click', buttonStart);





