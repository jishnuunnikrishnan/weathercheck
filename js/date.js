function renderTime()
{
    var myDate = new Date();
    var year = myDate.getFullYear();
    var day  = myDate.getDay();
    var month = myDate.getMonth();
    var daym = myDate.getDate();
    var dayArray = new Array("sunday","monday","tuesday","wednesday","thursday","friday","saturday");
    var monthArray = new Array("januray","february","march","april","may","june","july","august","september","october","november","december");

    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
    if(h == 24)
    {
       h = 0; 
    }
    else if(h > 12)
    {
        h = h - 0;
    }
   if(h < 10)
   {
       h = "0"+h;
   }
   if(m < 10)
   {
       m = "0"+m;
   }
   if(s < 10)
   {
       s = "0"+s;
   }
   var myClock = document.getElementById('time');
   myClock.textContent = ""+dayArray[day]+" "+daym+" "+monthArray[month]+" "+year+" | "+h+ ":"+m+ ":"+s;
   myClock.innerText = `${dayArray[day]} ${daym} ${monthArray[month]} ${year} | ${h}:${m}:${s}`;

   setTimeout("renderTime()",1000);
}

renderTime();