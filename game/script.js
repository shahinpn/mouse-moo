let ball = document.querySelector(".ball")
let cow = document.querySelector(".cow")

let x = Math.round(Math.random() * innerWidth)
let y = Math.round(Math.random() * innerHeight)

ball.style.transform = `translate(${x - 5}px, ${y - 5}px)`;
cow.volume = 0.1;
addEventListener("mousemove", e => {
    let sx = Math.round(e.x - x) >= 0 ? Math.round(e.x - x) : -(Math.round(e.x - x));
    let sy = Math.round(e.y - y) >= 0 ? Math.round(e.y - y) : -(Math.round(e.y - y));
    let space = Math.round((sx + sy) / 2);
    let wx = innerWidth - x > x ? innerWidth - x : x;
    let hy = innerHeight - y > y ? innerHeight - y : y;
    let maxXY = Math.round((wx + hy) /2)
    cow.volume = (1 -(space / maxXY)).toFixed(2)    
})

function end(){
    location.href = "../index.html"
}