class Player {
    constructor() {
        this.x = 250;
        this.gravity = 0.2;
        this.speed = 0;
        this.jumpCounter = 0;
        this.index = 0;
        this.width = 120;
        this.height = 201;
        this.lives = 3;
        this.score = 0;
        this.lifeImage = loadImage(
            "./assets/Bunny-sets-PNG/Players/bunny1_stand.png"
        );
    }
    setup() {
        this.y = HEIGHT - this.height;
    }
    jump() {
        this.jumpCounter++;
        if (this.jumpCounter < 3) {
            this.speed = -15;
        }
    }
    draw() {
        this.speed += this.gravity;
        this.y += this.speed;
        if (this.y >= HEIGHT - this.height) {
            this.jumpCounter = 0;
            this.y = HEIGHT - this.height;
        }
        if (frameCount % 4 === 0) {
            this.index++;
        }
        image(
            game.playerI[this.index % 2],
            this.x,
            this.y,
            this.width,
            this.height
        );

        push();
        textFont(font1, 50);
        this.drawLives();
        this.drawScore();
        pop();
    }
    drawLives() {
        text("LIVES", 0, height * 0.05, width * 1.65);
        for (let i = 0; i < this.lives; i++) {
            image(
                this.lifeImage,
                width - 240 + i * 50,
                15,
                this.lifeImage.width / 3,
                this.lifeImage.height / 3
            );
        }
    }

    drawScore() {
        text(`SCORE   ${this.score}`, 0, height * 0.05, width * 0.2);
    }
}
