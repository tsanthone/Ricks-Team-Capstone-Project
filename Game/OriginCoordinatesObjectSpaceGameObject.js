import GameObject from "../Engine/GameObject.js";

class OriginCoordinatesObjectSpaceGameObject extends GameObject {
  constructor(ball, screenWidth, screenHeight, size = 10) {
    super();
    this.ball = ball;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.size = size;
  }

  draw(ctx) {
    const centerX = this.screenWidth / 2;
    const centerY = this.screenHeight / 2;

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.moveTo(centerX, centerY - this.size);
    ctx.lineTo(centerX, centerY + this.size);
    ctx.moveTo(centerX - this.size, centerY);
    ctx.lineTo(centerX + this.size, centerY);
    ctx.stroke();

    // Display origin coordinates
    const originX = centerX - this.ball.x;
    const originY = centerY - this.ball.y;
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText(
      `(${originX.toFixed(2)}, ${-1 * (originY.toFixed(2))})`,
      centerX + this.size + 2,
      centerY - this.size - 5
    );
  }
}

export default OriginCoordinatesObjectSpaceGameObject;
