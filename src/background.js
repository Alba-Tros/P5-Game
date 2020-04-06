class Background {
    constructor() {
        this.imgs = [
            { src: loadImage("assets/background/"), x: 0, speed: 0 },
            { src: loadImage("assets/background/"), x: 0, speed: 1 },
            { src: loadImage("assets/background/"), x: 0, speed: 2 },
            { src: loadImage("assets/background/"), x: 0, speed: 3 },
            { src: loadImage("assets/background/"), x: 0, speed: 4 }
        ];
    }
    move(img) {
        img.x -= img.speed;

        image(img.src, img.x, 0);
        image(img.src, img.x + width, 0);
        if (img.x <= -width) {
            img.x = 0;
        }
    }
    display() {
        this.imgs.forEach(image => {
            this.move(image);
        });
    }
}
