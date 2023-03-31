const counters = document.querySelectorAll("button");
for (const counter of counters) { 
  counter.addEventListener("click", function() {
    this.innerHTML= parseInt(this.innerHTML) + 1;
    document.getElementById("b").innerHTML="اتممت الذكر";
    document.getElementById("reset").innerHTML="reset";
   console.log(localStorage.setItem(this.id, this.innerHTML))
    localStorage.setItem(this.id, this.innerHTML);
  });
  
}

let x=document.getElementById("reset");

x.addEventListener("click",function(){

for(const counter of counters){

  counter.innerHTML=0;
  document.getElementById("b").innerHTML="اتممت الذكر";
  document.getElementById("reset").innerHTML="reset";
  localStorage.setItem(counter.id, counter.innerHTML);
}
  
  localStorage.setItem("num",0);
    num.innerHTML =window.localStorage.getItem("num") ;
  
  // document.getElementById("num").innerHTML=0;
});


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
  


  function showAlert() {
    document.getElementById("customAlertBox").style.display = "block"; // Show the custom alert box
  }

  function showAlert1() {
    document.getElementById("customAlertBox1").style.display = "block"; // Show the custom alert box
  }
function cl(obj){
    if(window.localStorage.getItem("num")>=300)
    { showAlert();
      // alert(" لقد اتممت الذكر تقبل الله ❤️")
    for (const counter of counters) {
      counter.innerHTML=0;
      window.localStorage.setItem("num",0); 
      window.localStorage.setItem(counter.id,counter.innerHTML);
      counter.style.background="  rgba(255, 2, 53, 0.678)";
    }
        document.getElementById("b").innerHTML="اتممت الذكر";
        document.getElementById("b").className = "counter1";

       
    document.getElementById("reset").innerHTML="Reset";
    
    
     num.textContent=0;
    value=0;
  
    }
     
    else
    {showAlert1();
    obj.innerHTML="اتممت الذكر";
}
}

function closeAlert() {
  document.getElementById("customAlertBox").style.display = "none"; // Hide the custom alert box
}

function closeAlert1() {
  document.getElementById("customAlertBox1").style.display = "none"; // Hide the custom alert box
}
// Retrieve stored values from localStorage and update button innerHTML
for (const counter of counters) {
  const storedValue = localStorage.getItem(counter.id);
  if (storedValue) {
    counter.innerHTML = storedValue;
  }
}