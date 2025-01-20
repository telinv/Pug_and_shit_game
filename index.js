const pug = document.getElementById("pug");
const scoreDisplay = document.querySelector(".score");

function jump(){
    if(pug.classList != "jump"){
        pug.classList.add("jump");

        setTimeout(function(){
            pug.classList.remove("jump");
        }, 300);
    }
}

document.addEventListener("keydown", function(event){
    if (event.key === " "){
        jump();
    }
})

const shit = document.getElementById("shit");
let isAlive = setInterval(function (){
    let pugTop = parseInt(window.getComputedStyle(pug).getPropertyValue("top"));
    let shitLeft = parseInt(window.getComputedStyle(shit).getPropertyValue("left"));
    if (shitLeft < 50 && shitLeft > 0 && pugTop >= 140){
        alert("О ноу! Поел говна");
    }
}, 10);