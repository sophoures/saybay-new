const btnBar=document.getElementById("toggle-bar");
const toggle=document.getElementById("mobile-menu");
const btnClose=document.getElementById("close");
let i=0;
btnBar.addEventListener("click",()=>{
    if(i==0){
        toggle.style="display:block";
        i=1;
    }else{
        toggle.style="display:none";
        i=0;
    }
});
btnClose.addEventListener("click",()=>{
    toggle.style="display:none";
});
