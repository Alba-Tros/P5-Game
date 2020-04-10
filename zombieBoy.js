class Enemy {
    constructor() {
        this.height = 300;
        this.width = 160;
        this.x = width;
        this.y = height - this.width;
        this.img = loadImage("assets/Zombie-Boy-Girl-png/female/Walk-01.png");
    }
    display() {
        this.x -= 3 * game.speed;
        image(this.img, this.x, this.y, this.height, this.width);
    }
}
