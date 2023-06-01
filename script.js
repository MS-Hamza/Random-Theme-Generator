const body = document.body;

const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
console.log(start);
var intervalId;
start.addEventListener("click", function(){
    intervalId = setInterval(()=>{
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);
        const randomColor = `rgb(${red}, ${green}, ${blue})`;
        body.style.backgroundColor = randomColor;
    },1000)
})

stop.addEventListener("click", ()=>{
    clearInterval(intervalId);
})