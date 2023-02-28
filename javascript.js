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

// function click11(obj)
//  { vIst++;
//   obj.textContent="❤️" + vIst;
//   value++;
//    num.textContent = value;
//   if(vIst>=10)
//    {obj.style.background="#ffffff";
//    obj.style.color=""
//    obj.style.transition="20s";}
//    else
//    {obj.style.background="#3d2525";
//    obj.style.transition="1s";
//    }
// }


var t=0;
function disp(obj)
{ 
  if(t%2==0)
{document.getElementById("baqyat"+ (d.getDay())).style.display="flex";
obj.style.color="#d35252";

obj.innerHTML="الباقيات الصالحات🞃";
t++;}
else
{document.getElementById("baqyat"+(d.getDay())).style.display="none";
obj.style.color="rgb(43, 7, 13)";
obj.innerHTML="الباقيات الصالحات🞂";
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
