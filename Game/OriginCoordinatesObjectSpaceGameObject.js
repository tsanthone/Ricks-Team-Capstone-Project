import GameObject from "../Engine/GameObject.js";

class OriginCoordinatesObjectSpaceGameObject extends GameObject {
  constructor(ball, screenHeight, size = 10) {
    super();
    this.ball = ball;
    this.screenHeight = screenHeight;
    this.size = size;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.moveTo(0, 937 - this.size);
    ctx.lineTo(0, 937 + this.size);
    ctx.moveTo(this.size, 937);
    ctx.lineTo(-this.size, 937);
    ctx.stroke();

    // Display origin coordinates
    const originX = -this.ball.x;
    const originY = 937 - this.ball.y;
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText(
      `(${originX.toFixed(2)}, ${originY.toFixed(2)})`,
      this.size + 2,
      937 - this.size - 5
    );
  }
}

export default OriginCoordinatesObjectSpaceGameObject;
