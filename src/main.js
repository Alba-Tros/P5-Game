let game = new Game();
let HEIGHT = 1080;
let WIDTH = 1920;
let startGame = 1;

function preload() {
    game.init();
    fonta = loadFont("./assets/Fonts/MELLOW - DEMO.ttf"); // also good
    font1 = loadFont("./assets/Fonts/MachineStd-Medium.otf"); // also good
}

function setup() {
    let cnv = createCanvas(WIDTH, HEIGHT);
    cnv.parent("main-canvas");
    game.setup();
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    let c = color("#4bff00");
    fill(c);
    background(0);
    if (startGame === 1) {
        textFont(fonta, 100);
        textAlign(CENTER, TOP);
        text("Easter Corona", 0, height * 0.25, width);
        textSize(40);
        text("press  ENTER continue", 0, height * 0.8, width);
    } else if (startGame === 2) {
        textAlign(CENTER, CENTER);
        textSize(100);
        text("How To Play:", 0, height * 0.15, width);

        textSize(50);
        text(
            "Jump to avoid obstacles and also jump to catch coins",
            0,
            height * 0.3,
            width
        );

        textSize(75);
        text("Controls", 0, height * 0.45, width);
        textSize(50);
        text("Press the Space_Bar to jump", 0, height * 0.55, width);

        textSize(40);
        text("To start the game", 0, height * 0.75, width);
        text("press  ENTER", 0, height * 0.8, width);
    } else if (startGame === 3) {
        game.draw();
        if (game.player.lives == 0) {
            background(0);
            textFont(font1, 75);
            text("Oh no!", 0, height * 0.35, width);
            textSize(50);
            text("T-T", 0, height * 0.55, width);

            textSize(40);
            text("The game's over", 0, height * 0.75, width);
            text("press  A to restart", 0, height * 0.8, width);
            noLoop();
        }
    }
}

function keyPressed() {
    if (keyCode === 32) {
        game.player.jump();
    }
    if (keyCode === 13 && startGame <= 3) {
        startGame++;
    }
    if (keyCode === 65 && game.player.lives == 0) {
        window.location.reload();
    }
}
