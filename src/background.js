class Background {
    constructor() {
        this.images = [
            {
                src: loadImage("./assets/background/bigger/plx-1.png"),
                x: 0,
                speed: 0
            },
            {
                src: loadImage("./assets/background/bigger/plx-2.png"),
                x: 0,
                speed: 1
            },
            {
                src: loadImage("./assets/background/bigger/plx-3.png"),
                x: 0,
                speed: 2
            },
            {
                src: loadImage("./assets/background/bigger/plx-4.png"),
                x: 0,
                speed: 3
            },
            {
                src: loadImage("./assets/background/bigger/plx-5.png"),
                x: 0,
                speed: 4
            }
        ];
        this.height = 1080;
        this.width = 1920;
    }
    show(img) {
        image(img.src, img.x, 0);
        image(img.src, img.x + width, 0);
        img.x -= 2 * img.speed;
        if (img.x <= -width) {
            img.x = 0;
        }
    }
    draw() {
        this.images.forEach(image => {
            this.show(image);
        });
    }
}
