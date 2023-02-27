const counters = document.querySelectorAll("button");
for (const counter of counters) { 
  counter.addEventListener("click", function() {
    this.innerHTML= parseInt(this.innerHTML) + 1;
    document.getElementById("b").innerHTML="اتممت الذكر";
   console.log(localStorage.setItem(this.id, this.innerHTML))
    localStorage.setItem(this.id, this.innerHTML);
  });
  
}
    // localStorage.clear();








// let value = 0;
function click1(obj)
 {
  //  value++;
   num.textContent= parseInt(num.innerHTML) + 1
   obj.style.background="#c7286a";
   window.localStorage.setItem("num",num.textContent);
  //  window.localStorage.setItem("value",value);
  }

  if (window.localStorage.getItem("num")) {
    num.innerHTML =window.localStorage.getItem("num") ;
  }



function cl(obj){
    if(window.localStorage.getItem("num")>=10)
    {alert(" لقد اتممت الذكر تقبل الله ❤️")
    for (const counter of counters) {
      counter.innerHTML=0;
      window.localStorage.setItem("num",0); 
      window.localStorage.setItem(counter.id,counter.innerHTML);
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
// Retrieve stored values from localStorage and update button innerHTML
for (const counter of counters) {
  const storedValue = localStorage.getItem(counter.id);
  if (storedValue) {
    counter.innerHTML = storedValue;
  }
}