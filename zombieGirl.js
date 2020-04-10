class zombieGirl {
    constructor() {
        this.height = 521 / 2;
        this.width = 576 / 2;
        this.x = width;
        this.y = height - (this.height - 10);
        this.img = loadImage("assets/Zombie-Boy-Girl-png/female/Walk-01.png");
    }
    display() {
        this.x -= 3;
        image(this.img, this.x, this.y, this.width, this.height);
    }
}
