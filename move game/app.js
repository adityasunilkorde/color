let right_btn=document.querySelector("#left");
console.log(right_btn);
let line=document.querySelector(".line");
console.log(line);
let move=0;
let on="on"
right_btn.addEventListener("click",()=>{
if(on==="on"){
move+=10;
on="off";
}else{
    move+=10;
    on="on"
}
console.log(move);
line.style.left=`${-move}px`
});
