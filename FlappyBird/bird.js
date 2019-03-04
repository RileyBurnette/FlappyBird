function Bird() {
    this.y = width/2;
    this.x = 25;

    this.gravity =0.6;
    this.velocity =0;
    this.lift = -10;

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 16, 16);

    this.up = function () {
        this.velocity += this.lift;
    }
}

this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    
    if (this.y > height) {
        this.y = height;
        this.velocity = 0;
        }
    }
}