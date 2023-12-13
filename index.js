const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["black","gray","blue",'navy',"red","violet","beige"];

body.style.backgroundColor="white";

button.addEventListener("click",changeColor);

function changeColor()
{
    const colorIndex=parseInt(Math.random()*color.length);
    body.style.backgroundColor=color[colorIndex];
}