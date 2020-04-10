class Obstacles {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = WIDTH;
        this.y = random(0, HEIGHT - this.height);
        this.index = 0;
    }
    draw() {
        this.x--;
        if (frameCount % 10 === 0) {
            this.index++;
        }
        image(
            game.coins[this.index % 5],
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    collides(obj) {
        let xCollision =
            (this.x > obj.x && this.x < obj.x + obj.width) ||
            (this.x + this.width > obj.x &&
                this.x + this.width < obj.x + obj.width);

        let yCollision =
            (this.y > obj.y && this.y < obj.y + obj.height) ||
            (this.y + this.height > obj.y &&
                this.y + this.height < obj.y + obj.height);
        let collision = xCollision && yCollision;
        return collision;
    }
}
