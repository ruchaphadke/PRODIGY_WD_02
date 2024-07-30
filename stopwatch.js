var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var resetButton = document.getElementById("reset");
var resumeButton = document.getElementById("resume");
var lapButton = document.getElementById("lap");
let hours = 0o0;    //0o0 to avoid octal literals
let mins = 0o0;
let seconds = 0o0;
let millicount = 0o0;      //millisecond counter
startButton.onclick=function(){
   flag=true;
   document.getElementById("start").classList.add("d-none");
   document.getElementById("lap").classList.remove("d-none");
   document.getElementById("stop").classList.remove("d-none");
   document.getElementById("lap").classList.remove("d-none");
   document.getElementById("lap").classList.remove("disabled");
   stop_watch();
}
resetButton.onclick=function()
 {
    document.getElementById("lapse").classList.add("d-none");
    document.getElementById("start").classList.remove("d-none");
    document.getElementById("lap").classList.remove("d-none");
    document.getElementById("lap").classList.add("disabled");
    document.getElementById("reset").classList.add("d-none");
    document.getElementById("resume").classList.add("d-none");
    flag=false;
    hours=0o0;
    mins=0o0;
    seconds=0o0;
    millicount=0o0;
   document.getElementById("hr").innerHTML="00";
   document.getElementById("min").innerHTML="00";
   document.getElementById("sec").innerHTML="00";
 }
 stopButton.onclick=function(){
    flag=false;
    document.getElementById("reset").classList.remove("d-none");
    document.getElementById("resume").classList.remove("d-none");
    document.getElementById("lap").classList.add("d-none");
    document.getElementById("stop").classList.add("d-none");
    document.getElementById("start").classList.add("d-none");
    document.getElementById("lap").classList.remove("disabled");
    
 }
resumeButton.onclick=function()
{    
    flag=true;
    document.getElementById("lap").classList.remove("d-none");
    document.getElementById("lap").classList.remove("disabled");
    document.getElementById("stop").classList.remove("d-none");
    document.getElementById("reset").classList.add("d-none");
    document.getElementById("resume").classList.add("d-none");
    
    stop_watch(); 
}
lapButton.onclick=function()
{
    document.getElementById("lapse").classList.remove("d-none");
    flag=true;
    if(hours<10)
    {
        h_var= "0"+ hours;
    }
    if(hours>=10)
    {
        h_var= hours;
    }

    if(mins<10)
    {
        m_var ="0" + mins;
    }
    if(mins>=10)
    {
        m_var = mins;
    }
    if(seconds<10)
    {
        s_var ="0" + seconds;
    }
    if(seconds>=10)
    {
        s_var = seconds;
    }
    document.getElementById("hourr").innerHTML= h_var;
    document.getElementById("minutess").innerHTML= m_var;
    document.getElementById("secondss").innerHTML= s_var;
}

function stop_watch(){
    if(flag)
    {
        millicount++;
        if(millicount==100)
        {
            seconds++;
            millicount=0;
        }
        if(seconds==60)
        {
            mins++;
            seconds=0;
        }
        if(mins==60)
        {
           hours++;
           seconds=0;
            mins = 0;
        }
        var hr_value=hours;
        var min_value=mins;
        var sec_value=seconds;
    if(hours<10)                         //string conversion & display string concatenation
    {
        hr_value="0"+ hours;
    }
    if(mins<10)
    {
        min_value="0" + mins;
    }
    if(seconds<10)
    {
        sec_value="0" + seconds;
    }
    // debugger;
    document.getElementById("hr").innerHTML=hr_value;
   document.getElementById("min").innerHTML=min_value;
   document.getElementById("sec").innerHTML=sec_value;
//    debugger;
   setTimeout(stop_watch,10);    //loop
}
}