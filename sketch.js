
function setup() {

    createCanvas(900, 900);
    
    background("black");
    
    }
    
    function draw() {
    
    stroke("white");
    
    fill("green");
    
    if(mouseIsPressed === false){
    
    rect(mouseY, mouseX,20, 35);
    
    }
    
    }
    