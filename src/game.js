class Game {
  constructor() {
    this.obstacles = [];
  }
  init() {
    this.background = new Background();
    this.player = new Player();
  }
  setup() {
    this.player.setup();
  }
  display() {
    clear();

    this.background.display();
    this.player.display();

    //creating all of the obstacles every 60 frames
    if (frameCount % 60 === 0) {
      this.obstacles.push(new Obstacles());
    }
    //displaying all of the obstacles
    this.obstacles.forEach((obstacle) => {
      obstacle.display();
    });

    //here we will filter whatever obstacle collides with the player
    this.obstacles = this.obstacles.filter((obstacle) => {
      return !obstacle.checkCollision(this.player);
    });
  }
}
