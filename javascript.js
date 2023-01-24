const d=new Date();
function setup(){
const weekday=["الاحد","الاثنين","الثلاثاء","الاربعاء","الخميس","الجمعة","السبت"];

var day=weekday[d.getDay()];
day1.innerHTML=day;
// document.getElementById("day1").style.color= "red";
}

// document.getElementById(curDay).style.background = "#ff651a";

setup();
var vIst=0;
let num = document.getElementById("num");
let value = 0;
function click11(obj)
 { vIst++;
   
  value++;
   num.textContent = value;
  if(vIst>=10)
   {obj.style.background="#ffffff";
   obj.style.transition="20s";}
   else
   {obj.style.background="#3d2525";
   obj.style.transition="1s";
   }
}
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
    value=0;
     }
    else
    {alert("عذرا انك لم تكمل هدف الذكر و هو 100 تسبيحة على الاقل");
}
}

var t=0;
function disp(obj)
{ 
  if(t%2==0)
{document.getElementById("baqyat").style.display="flex";
obj.style.color="#d35252";
t++;}
else
{document.getElementById("baqyat").style.display="none";
obj.style.color="rgb(43, 7, 13)";
t++;}

}


// function c2(obj){
//     vm++;
//      if(value>=10)
//      alert("لقد اتممت الذكر يا منار")
//     if(vd===vm)
   
//     alert(" ❤️❤️تقبل الله❤️ لقد تم تسبيح اليوم يا ديمةومنار");
    

// }


function daily()
{
  switch (d.getDay()) {
		case 0:
			document.getElementById("id1").style.display="flex";
			break;
		case 1:
			document.getElementById("id2").style.display="flex";
			break;
		case 2:
			document.getElementById("id3").style.display="flex";
			break;
		case 3:
			document.getElementById("id4").style.display="flex";
			break;
      case 4:
        document.getElementById("id5").style.display="flex";
			break;
      case 5:
        document.getElementById("id6").style.display="flex";
			break;
      case 6:
        document.getElementById("id7").style.display="flex";
			break;
	}

}
daily();
