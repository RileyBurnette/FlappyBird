var bird;
var pipes = [];
var score = 0;


function setup() {
    createCanvas(400,600);
    bird = new Bird();
    pipes.push(new pipe());
}

function draw() {
    background(0);
    bird.update();
    bird.show(); 

    if (frameCount % 100 == 0) {
        pipes.push(new pipe());
    }

    for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();
        
        if (pipes[i].hits(bird)) {
            div_show();
            breakgame();
        }

        if (pipes[i].score(bird)) {
             ++score;
        }

        if (pipes[i].offscreen()) {
            pipes.splice(i, 1);
        
        }
     }
     document.getElementById('FinalScore').innerHTML= "Score: " + score;
     document.getElementById('score').innerHTML= "Score: " + score;
}

function keyPressed() {
    if (key === ' ') {
        bird.up();
    }
} 

function check_empty() {
    document.getElementById('form').submit();
    location.reload();
    }
function div_show() {
    document.getElementById('abc').style.display = "block";
}
