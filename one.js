
//for color generater
let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");
let four=document.getElementById("four");
let five=document.getElementById("five");
let six=document.getElementById("six");
let seven=document.getElementById("seven");
let eight=document.getElementById("eight");
let nine=document.getElementById("nine");
let ten=document.getElementById("ten");
let eliven=document.getElementById("eliven");
let one12=document.getElementById("one_two");
let one_13=document.getElementById("one_three");
let one_14=document.getElementById("one_four");
let one_15=document.getElementById("one_five");
let one_16=document.getElementById("one_six");
let block3=document.querySelectorAll(".block3");
let p=document.querySelectorAll("p");
console.log(p);
let color2=()=>{
let r=Math.floor(Math.random()*255);
let g=Math.floor(Math.random()*255);
let b=Math.floor(Math.random()*255);
let arr=[r,g,b,];

return arr;
}
let color_pallet=()=>{
 let box_1=one.style.backgroundColor=`rgba(${color2()})`;
 p[0].innerText=box_1;
 p[0].style.color=box_1;
let box_2=two.style.backgroundColor=`rgba(${color2()})`;
p[1].innerText=box_2;
p[1].style.color=box_2;
 let box_3=three.style.backgroundColor=`rgba(${color2()})`;
 p[2].innerText=box_3;
 p[2].style.color=box_3;
 let box_4=four.style.backgroundColor=`rgb(${color2()})`;
 p[3].innerText=box_4;
 p[3].style.color=box_4;
 let box_5=five.style.backgroundColor=`rgb(${color2()})`;
 p[4].innerText=box_5;
 p[4].style.color=box_5;
 let box_6=six.style.backgroundColor=`rgb(${color2()})`;
 p[5].innerText=box_6;
 p[5].style.color=box_6;
 let box_7=seven.style.backgroundColor=`rgb(${color2()})`;
 p[6].innerText=box_7;
 p[6].style.color=box_7;
 let box_8=eight.style.backgroundColor=`rgb(${color2()})`;
 p[7].innerText=box_8;
 p[7].style.color=box_8;
 let box_9=nine.style.backgroundColor=`rgb(${color2()})`;
 p[8].innerText=box_9;
 p[8].style.color=box_9;
 let box_10=ten.style.backgroundColor=`rgb(${color2()})`;
 p[9].innerText=box_10;
 p[9].style.color=box_10;
 let box_11=eliven.style.backgroundColor=`rgb(${color2()})`;
 p[10].innerText=box_11;
 p[10].style.color=box_11;
 let box_12=one12.style.backgroundColor=`rgb(${color2()})`;
 p[11].innerText=box_12;
 p[11].style.color=box_12;
 let box_13=one_13.style.backgroundColor=`rgb(${color2()})`;
 p[12].innerText=box_13;
 p[12].style.color=box_13;
 let box_14=one_14.style.backgroundColor=`rgb(${color2()})`;
 p[13].innerText=box_14;
 p[13].style.color=box_14;
 let box_15=one_15.style.backgroundColor=`rgb(${color2()})`;
 p[14].innerText=box_15;
 p[14].style.color=box_15;
 let box_16=block3[0].style.backgroundColor=`rgb(${color2()})`;
 p[15].innerText=box_16;
 p[15].style.color=box_16;
 let box_17=block3[1].style.backgroundColor=`rgb(${color2()})`;
 p[16].innerText=box_17;
 p[16].style.color=box_17;
 let box_18 = block3[2].style.backgroundColor=`rgb(${color2()})`;
 p[17].innerText=box_18;
 p[17].style.color=box_18;
}
color_pallet();
let h4=document.querySelector("h4");
console.log(h4);
h4.addEventListener("click",()=>{
    color_pallet();
})


let URL=" https://api.thecatapi.com/v1/images/search?limit=10"
let img=async()=>{
    let img2= await fetch(URL);
let value=await img2.json();
console.log(value
    );
}