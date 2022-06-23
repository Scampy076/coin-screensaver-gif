function setup() {
    createCanvas(400, 400);
}

let coinRotation = -25;
let xPos = 300;
let yPos = 100;
let xSpeed = 1;
let ySpeed = 1;

function draw()
{
    background("magenta");
    fill("gold");
    ellipse(xPos, yPos, coinRotation, 25);
    coinRotation = coinRotation + 0.5;
    if (coinRotation > 25) {
        coinRotation = coinRotation * -1; 
    if(xPos > 300){
        xSpeed = xSpeed * -1
        }
    if(yPos > 400){
        ySpeed = ySpeed * -1
    }
    if(xPos < 0){
        xSpeed = xSpeed * -1
    }
    if(yPos < 0){
        ySpeed = ySpeed * -1
    }
          }
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;
}
