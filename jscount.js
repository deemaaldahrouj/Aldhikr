const counters = document.querySelectorAll("button");
for (const counter of counters) { 
  counter.addEventListener("click", function() {
    this.innerHTML= parseInt(this.innerHTML) + 1;
    document.getElementById("b").innerHTML="اتممت الذكر";
   console.log(localStorage.setItem(this.id, this.innerHTML))
    localStorage.setItem(this.id, this.innerHTML);
  });
  
}


// Get the current date
var now = new Date();

// Set the target time for clearing Local Storage to midnight
var targetTime = new Date(
  now.getFullYear(),
  now.getMonth(),
  now.getDate() + 1, // Add one day to get tomorrow's date
  0, // Hours
  0, // Minutes
  0 // Seconds
);

// Calculate the number of milliseconds until the target time
var timeUntilClear = targetTime.getTime() - now.getTime();

// Set up a timeout function to clear Local Storage at the target time
setTimeout(function() {
  localStorage.clear();
}, timeUntilClear);









//localStorage.clear();



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
    if(window.localStorage.getItem("num")>=200)
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