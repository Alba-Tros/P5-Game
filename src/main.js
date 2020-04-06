let game = new Game();
function preload() {
  game.init();
}
function setup() {
  createCanvas(384, 216);
  game.setup();
}
function draw() {
  frameRate(40);
  game.display();
}

//
function keyPressed() {
  let spaceBarCode = 32;
  if (keyCode === spaceBarCode) {
    game.player.jump();
  }
}
