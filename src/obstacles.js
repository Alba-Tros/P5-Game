class Obstacles {
  constructor() {
    this.height = 25;
    this.width = 25;
    this.x = width;
    //giving random number to the THIS.Y
    this.y = random(0, height - this.height);
  }
  checkCollision(player) {
    let left = this.x;
    let right = this.x + this.width;
    let playerLeft = player.x;
    let playerRight = player.x + player.width;

    let top = this.y;
    let bottom = this.y + this.height;

    let playerTop = player.y;
    let playerBottom = player.y + player.height;

    let xCollision =
      (left > playerLeft && left < playerRight) ||
      (right > playerLeft && right < playerRight);

    let yCollision =
      (top > playerTop && top < playerBottom) ||
      (bottom > playerTop && bottom < playerBottom);

    let collision = xCollision && yCollision;
    return collision;
  }

  display() {
    //Moving the OBSTACLE TO THE LEFT
    this.x--;
    fill("red");

    rect(this.x, this.y, 20, 20);
  }
}
