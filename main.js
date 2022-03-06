const feedEl = document.getElementById("feed-btn");
const playEl = document.getElementById("play-btn");
const sleepEl = document.getElementById("sleep-btn");
// console.log(feedEL);
const myCountO = document.getElementById("feed-count");
// console.log (myCountO)
const myCountT = document.getElementById("play-count");
const myCountH = document.getElementById("sleep-count");
// console.log("hi");
const startButton = document.getElementById("start-button");
// console.log(startButton);
const myAgeCount = document.getElementById("age-count");

let num= 0;
let myCount = null;
let started = false;

function buttonStart() {
  if(!started){
    myCount = setInterval(function(){
      num++;
      stopMyCount()
      myCountO.innerText="Hunger " + num;
      myCountT.innerText="Boredom " + num;
      myCountH.innerText="Sleepiness " + num;
    //   myAgeCount.innerText="Age " + num;
      started = true;
    },2000);
  }
}

function pFood(body,color){
    document.body.style.backgroundColor = '#70bfb9';
    if  (document.getElementById("imgClickAndChange").src == "https://i.pinimg.com/originals/ae/a5/50/aea5503452ac0387b5fea012197e56cb.gif") 
   {
       document.getElementById("imgClickAndChange").src = "https://i.pinimg.com/originals/55/5c/39/555c39d22c91d954f2892e99bb71e265.gif";
   }
   if (num >1 ){
    num--
  myCountO.innerText= "Hunger " + num;
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


function myButton(){
    let myText = document.getElementById("myText");
    let myMessage = document.getElementById("message");
    myMessage.innerHTML = "welcome to your tamagotchi " + myText.value;
}




