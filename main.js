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
// const resetButton = document.getElementById("reset-btn")

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
      myAgeCount.innerText="Age " + num;
      started = true;
    },2000);
  }
}

function pFood(body,color){
   if (num > 1 ){
    num--
  myCountO.innerText= "Hunger " + num;
  if  (document.getElementById("imgClickAndChange").src == "https://i.pinimg.com/originals/ae/a5/50/aea5503452ac0387b5fea012197e56cb.gif") 
   {
       document.getElementById("imgClickAndChange").src = "https://i.pinimg.com/originals/55/5c/39/555c39d22c91d954f2892e99bb71e265.gif";
   }
   document.body.style.backgroundColor = '#70bfb9';
 }
 
}

const myplay=(body, color )=>{
    // console.log(myplay);
   if (num >1 ){
      num--
    myCountT.innerText="Boredom " + num;
    if  (document.getElementById("imgClickAndChange").src == "https://i.pinimg.com/originals/ae/a5/50/aea5503452ac0387b5fea012197e56cb.gif") 
   {
       document.getElementById("imgClickAndChange").src = "https://thumbs.gfycat.com/FlamboyantSpiritedBelugawhale-size_restricted.gif";
   }
   document.body.style.backgroundColor = '#ffffff';
}
   }
   
const dosleep=()=>{
 if (num >1 ){
      num--
    myCountH.innerText="Sleepiness" + num;
    // removeImg();
    if  (document.getElementById("imgClickAndChange").src == "https://i.pinimg.com/originals/ae/a5/50/aea5503452ac0387b5fea012197e56cb.gif") 
   {
       document.getElementById("imgClickAndChange").src = "https://thumbs.gfycat.com/TimelyInferiorAcouchi-max-1mb.gif"; 
    //    element.className = element.className === 'highlight' ? '' : 'highlight';
   }
// let sleepImg = document.createElement("img");
// sleepImg.setAttribute("src","https://thumbs.gfycat.com/TimelyInferiorAcouchi-max-1mb.gif");
// document.querySelector("#changeImg").appendChild(sleepImg);
   }
}

// function  gameOver(){
//     if (pFood >= 10 || myplay >= 10 || dosleep >= 10){
//         stopMyCount();
//     feedEl.removeEventListener('click', pFood);
//     playEl.removEventListener('click', myplay);
//     sleepEl.removeEventListener('click', dosleep);

//     }
// }
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


// const removeImg = () =>{
//     const imgEl = document.querySelector("img")
//     const imgClick = document.querySelector("#changeImg")
//     imgClick .remove(imgEl);
// }


feedEl.addEventListener('click', pFood);
playEl.addEventListener('click', myplay);
sleepEl.addEventListener('click', dosleep);
startButton.addEventListener('click', buttonStart);
// resetButton .addEventListener('click', gameOver)


function myButton(){
    let myText = document.getElementById("myText");
    let myMessage = document.getElementById("message");
    myMessage.innerHTML = "welcome to your tamagotchi " + myText.value;
}




