const counters = document.querySelectorAll("button");

for (const counter of counters) {
  counter.addEventListener("click", function() {
    this.innerHTML= parseInt(this.innerHTML) + 1;
    document.getElementById("b").innerHTML="اتممت الذكر";
   });


}

let value = 0;
function click1(obj)
 {
   value++;
   num.textContent = value;
   obj.style.background="#c7286a";
}


function cl(obj){
    if(value>=100)
    {alert(" لقد اتممت الذكر تقبل الله ❤️")
    for (const counter of counters) {
      counter.innerHTML=0;
      counter.style.background="  rgba(255, 2, 53, 0.678)";
    }
        document.getElementById("b").innerHTML="اتممت الذكر";
        document.getElementById("b").className = "counter1";

       
    
    
    
     num.textContent=0;
    value=0;
  
    }
     
    else
    {alert("عذرا انك لم تكمل هدف الذكر و هو 100 تسبيحة على الاقل");
    obj.innerHTML="اتممت الذكر";
}
}
