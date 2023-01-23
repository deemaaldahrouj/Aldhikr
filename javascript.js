function setup(){
const weekday=["الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","السبت"];
const d=new Date();
var day=weekday[d.getDay()];
day1.innerHTML=day;
// document.getElementById("day1").style.color= "red";
}

// document.getElementById(curDay).style.background = "#ff651a";

setup();

let num = document.getElementById("num");
let value = 0;
function click1(obj)
 {
   value++;
   num.textContent = value;
   obj.style.background="#c7286a";
}

let vd=0;
let vm=0;
function cl(obj){
    vd++;
    if(value>=10)
    {alert(" لقد اتممت الذكر تقبل الله")
     num.textContent=0;
    value=0;}
    else
    {alert("عذرا انك لم تكمل هدف الذكر و هو 100 تسبيحة على الاقل");
}


}

// function c2(obj){
//     vm++;
//      if(value>=10)
//      alert("لقد اتممت الذكر يا منار")
//     if(vd===vm)
   
//     alert(" ❤️❤️تقبل الله❤️ لقد تم تسبيح اليوم يا ديمةومنار");
    

// }



