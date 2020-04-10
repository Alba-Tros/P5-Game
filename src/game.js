class Game {
    constructor() {
        this.obstacles = [];
    }
    init() {
        this.coinIMG = loadImage("./assets/coins/tile000.png");
        this.coins = [];
        for (let i = 0; i <= 4; i++) {
            this.coins.push(loadImage(`./assets/coins/tile00${i}.png`));
        }

        this.playerIMG = loadImage(
            "./assets/Bunny-sets-PNG/Players/bunny1_walk1.png"
        );
        this.playerI = [];
        for (let i = 1; i <= 2; i++) {
            this.playerI.push(
                loadImage(`./assets/Bunny-sets-PNG/Players/bunny1_walk${i}.png`)
            );
        }

        this.zombieGr = loadImage(
            "./assets/Zombie-Boy-Girl-png/female/Walk-01.png"
        );
        this.zombieG = [];
        for (let i = 1; i <= 10; i++) {
            this.zombieG.push(
                loadImage(`./assets/Zombie-Boy-Girl-png/female/Walk-0${i}.png`)
            );
        }

        this.zombieBo = loadImage(
            "./assets/Zombie-Boy-Girl-png/male/Walk-01.png"
        );
        this.zombieB = [];
        for (let i = 1; i <= 10; i++) {
            this.zombieB.push(
                loadImage(`./assets/Zombie-Boy-Girl-png/male/Walk-0${i}.png`)
            );
        }
        this.carrotIMG = loadImage("./assets/Bunny-sets-PNG/carrot.png");

        this.brackground = new Background();
        this.player = new Player();
        this.zombie1 = new zombieGirl();
        this.zombie2 = new zombieBoy();
        this.coinzs = new coinz();
        this.carrots = new carrot();
    }

    setup() {
        this.player.setup();
        this.score = 0;
        this.zombie1 = [];
        this.zombie2 = [];
        this.coinzs = [];
        this.carrots = [];
        this.speed = 1;
    }
    draw() {
        clear();
        this.brackground.draw();
        this.player.draw();

        if (frameCount % 300 === 0) {
            this.zombie1.push(new zombieGirl());
        }

        if (frameCount % 300 === 0) {
            this.zombie2.push(new zombieBoy());
        }
        if (frameCount % 100 === 0) {
            this.coinzs.push(new coinz());
        }
        if (frameCount % 100 === 0) {
            this.carrots.push(new carrot());
        }
        if ((frameCount % 50) / game.speed ** 2 === 0) {
            this.speed += 0.05;
        }

        let collision = (objects, objectName) => {
            if (
                this.player.x + this.player.width > objects.x + 15 &&
                this.player.x < objects.x - 15 + objects.width &&
                this.player.y + this.player.height > objects.y + 15 &&
                this.player.y < objects.y - 15 + objects.height
            ) {
                if (objectName === "zombie1") {
                    this.player.lives--;
                } else if (objectName === "zombie2") {
                    this.player.lives--;
                } else if (objectName === "coinzs") {
                    this.player.score += 100;
                }
                return true;
            }
        };

        this.coinzs = this.coinzs.filter(coinz => {
            coinz.display();
            return !collision(coinz, "coinzs");
        });

        this.zombie1 = this.zombie1.filter(zombieGirl => {
            zombieGirl.display();
            return !collision(zombieGirl, "zombie1");
        });
        this.zombie2 = this.zombie2.filter(zombieBoy => {
            zombieBoy.display();
            return !collision(zombieBoy, "zombie2");
        });
        push();
        textFont(fonta, 75);
        textAlign(CENTER, TOP);
        text("Easter Corona", 0, height * 0.03, width);
        pop();
    }
}
