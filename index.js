//  All html call in javascript fule.
const timerpara = document.getElementById('timerPara');
const startbtn = document.getElementById('startbtn')
const endbtn = document.getElementById('Stoptbtn')

// Global variable.
let usertime;
let result;
let isRunning = false;

// meain function.
const timeDisplay = (dutution)=>{
let time = dutution
// SetInterVal one second por por kaj korbe.
result =setInterval(()=>{
  const minuti =  parseInt(time/60,10)
  const second =  parseInt(time%60,10)
 const displayminut = minuti<10?'0'+minuti:minuti;
 const displaysecond = second<10?'0'+second:second;
  timerpara.innerText = displayminut +':'+ displaysecond

  if(--time<0){
  clearInterval(result)
  timerpara.innerText = 'brath out'

  setTimeout(()=>{
  timerpara.innerText = 'brath in'
  timeDisplay(usertime)
  },3000)
  }
   },1000)
}

// start button code.
startbtn.addEventListener('click',()=>{
if(!isRunning){
usertime = 62
timeDisplay(usertime)
isRunning = true
   
}
})
// stop button code.
endbtn.addEventListener('click',()=>{
clearInterval(result)
timerpara.innerText = 'brath in'
isRunning = false
})















