const x=document.getElementsByClassName("hamburger-container")[0];
const y=document.getElementsByClassName("menu-container")[0];
function handleClick(){
    const computedStyle = window.getComputedStyle(y);
    if(computedStyle.display==="none"){
        y.style.display="block";
    }
    else{
        y.style.display="none";
    }
}
x.addEventListener('click', handleClick);