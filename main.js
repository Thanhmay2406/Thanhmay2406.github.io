let banner = document.querySelector('.slide-1');
let canvas = document.getElementById('dotcanvas');

// get width and height
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let ctx = canvas.getContext('2d');
let dots = [];
// let color = '#D9D9D9'

// create random coordinates
for (let i=0 ; i<30 ; i++)
{
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() *3 + 5
    });
}

const draw_dots = () =>{
    dots.forEach(dots => {
        ctx.fillStyle = '#D9D9D9';
        ctx.beginPath();
        ctx.arc(dots.x , dots.y , dots.size , 0 , Math.PI * 2);
        ctx.fill();
    })
}

draw_dots();

console.log(dots)

banner.addEventListener('mousemove' , (event) => {
    ctx.clearRect(0,0,canvas.width , canvas.height);
    draw_dots();
    let mouse = {
        x: event.pageX - banner.getBoundingClientRect().left,
        y: event.pageY - banner.getBoundingClientRect().top
    }

    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 300)
        {
            ctx.strokeStyle = '#D9D9D9';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x , dot.y);
            ctx.lineTo(mouse.x , mouse.y);
            ctx.stroke();
        }
    })
})