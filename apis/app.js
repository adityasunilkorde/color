let URL="https://dog.ceo/api/breeds/image/random";
console.log(URL);
let img=async()=>{
    let img2=await fetch(URL);
    let value=await img2.json()
    console.log(value);
}
let div=document.querySelector("div");
let btn=document.querySelector("button");
