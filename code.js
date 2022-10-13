let button=document.createElement("button");
button.innerHTML="Click ME"
button.addEventListener("click",foo)
document.body.append(button);

function foo(){
   let ele=document.createElement("span");
   ele.innerHTML="Welcome to guvi";
   ele.style.fontSize="20px";
   ele.style.color="blue";
   document.body.append(ele);
}