let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let circles = [];
let numerOfCircles = 20;
let range = document.querySelector("#speed");
let numberOfBalls = document.querySelector("#balls");
let button = document.querySelector("button");

canvas.width = 700;
canvas.height = 700;
let colors = [
    "#2FF3E0",
    "#F8D210",
    "#FA26A0",
    "#F51720"
];

function Circle(x,y,radius,speedX,speedY,velocity,color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
    this.velocity = velocity;
    this.color = color;



    this.drawShape = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0 , Math.PI * 2, false);
    ctx.fillStyle = color;
    ctx.fill();

    }
    this.anim = function(){
        
        if(this.x + this.radius > canvas.width || this.x < 0 ){

            speedX = -speedX;

        }
        if(this.y + this.radius > canvas.height || this.y < 0){
            speedY = -speedY;
        }




        this.x += speedX ;
        this.y += speedY ;



        this.drawShape();
    }

}


console.log(circles);

function animation(){

    // ctx.clearRect(0,0,innerWidth,numerOfCircles innerHeight);
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,innerWidth,innerHeight)

    
    circles.forEach(circle => {
        circle.anim();
    });



    // console.log(range.value);
    requestAnimationFrame(animation);
}

button.addEventListener("click", function(){
    circles = [];
    
    for(let i = 0 ; i < numberOfBalls.value ; i++){
        // let x = Math.random() * canvas.width;
        // let y = Math.random() * canvas.height;
        // velocity =0;
        let x = canvas.width / 2;
        let y = canvas.height / 2;
        let radius = 20;
        let velocity = 0.3;
        let speedX = (Math.random() - 0.5) * range.value ;
        let speedY = (Math.random() - 0.5)  * range.value ;
        let color = colors[Math.floor(Math.random() * colors.length)];
        circles.push(new Circle(x,y,radius,speedX,speedY,velocity,color))
    }
    animation();
});