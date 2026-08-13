let mode=document.getElementById("mode")
let currmode="light";
let body=document.querySelector("body");
let contentBox= document.getElementById('content')
let cursorBox= document.getElementById('cursor-box')
mode.addEventListener("click", (e)=>{
    if(currmode==="light"){
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});
contentBox.addEventListener('mousemove',(e)=>{
   cursorBox.style.left=`${e.clientX}px`
   cursorBox.style.top=`${e.clientY}px`
   
    
})