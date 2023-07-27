var time = document.querySelector("#time");
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var reset = document.querySelector("#reset");
var ms = 0;
var sec = 0;
var min = 0;
var timeoutId = null;

start.addEventListener("click",function(){
    timeoutId = setInterval(function(){
        ms = parseInt(ms);
        sec = parseInt(sec);
        min = parseInt(min);
    
        ms++;
    
        if(ms==100){
            sec++;
            ms=0;
        }
    
        if(sec==60){
            min++;
            sec=0;                                  
       }

       if(ms<10){
            ms = '0' + ms;
       }
       if(min<10){
            min = '0' + min;
       }
       if(sec<10){
            sec = '0' + sec;
       }
    
        time.innerHTML = `${min} : ${sec} : ${ms}`;
    
    },10)
})

stop.addEventListener("click",function(){
    clearTimeout(timeoutId);
})

reset.addEventListener("click",function(){
    ms = "00";
    min = "00";
    sec = "00";
    time.innerHTML = `${min}:${sec}:${ms}`;
})