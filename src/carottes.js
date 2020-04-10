class carrot {
    constructor() {
        this.width = 780;
        this.height = 700;
        this.x = WIDTH;
        this.y = random(0, HEIGHT - this.height);
        this.img = loadImage("./assets/Bunny-sets-PNG/carrot.png");
        this.index = 0;
    }
    display() {
        this.x -= 100 * game.speed;
        if (frameCount % 10 === 0) {
            this.index++;
        }
        image(
            //game.carrots[this.index % 5],
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}
