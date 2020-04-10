class Game {
    constructor() {
        this.obstacles = [];
    }
    init() {
        this.coinIMG = loadImage("assets/coins/tile000.png");
        this.coins = [];
        for (let i = 0; i <= 4; i++) {
            this.coins.push(loadImage(`assets/coins/tile00${i}.png`));
        }

        this.playerIMG = loadImage(
            "assets/Bunny-sets-PNG/Players/bunny1_walk1.png"
        );
        this.playerI = [];
        for (let i = 1; i <= 2; i++) {
            this.playerI.push(
                loadImage(`assets/Bunny-sets-PNG/Players/bunny1_walk${i}.png`)
            );
        }

        this.zombieGr = loadImage(
            "assets/Zombie-Boy-Girl-png/female/Walk-01.png"
        );
        this.zombieG = [];
        for (let i = 1; i <= 10; i++) {
            this.zombieG.push(
                loadImage(`assets/Zombie-Boy-Girl-png/female/Walk-0${i}.png`)
            );
        }

        this.brackground = new Background();
        this.player = new Player();
        this.zombie1 = new zombieGirl();
        this.coinzs = new coinz();
    }

    setup() {
        this.player.setup();
        this.score = 0;
        this.zombie1 = [];
        this.coinzs = [];
    }
    draw() {
        clear();
        if (frameCount % 120 === 0) {
            this.obstacles.push(new Obstacles());
        }

        this.brackground.draw();
        this.player.draw();

        if (frameCount % 300 === 0) {
            this.zombie1.push(new zombieGirl());
        }

        if (frameCount % 100 === 0) {
            this.coinzs.push(new coinz());
        }

        let collision = (objects, objectName) => {
            if (
                this.player.x + this.player.width > objects.x + 25 &&
                this.player.x < objects.x - 25 + objects.width &&
                this.player.y + this.player.height > objects.y + 25 &&
                this.player.y < objects.y - 25 + objects.height
            ) {
                if (objectName === "zombie1") {
                    this.player.lives--;
                } else if (objectName === "coinzs") {
                    this.player.score += 10;
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
    }
}
