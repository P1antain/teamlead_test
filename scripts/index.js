let minutes = document.querySelector('.clock__minutes');
let second = document.querySelector('.clock__second');

function clockTimeOut(){
   let minutesValue = 59;
   let secondValue = 11;

   let timer = setInterval(function (){
       minutes.innerHTML = minutesValue;
       second.innerHTML = secondValue--;

       if(secondValue === 0) {
           secondValue = 60;
           minutesValue--;
           if(minutesValue < 0) clearInterval(timer)
       }
   },  1000)
}
clockTimeOut();


