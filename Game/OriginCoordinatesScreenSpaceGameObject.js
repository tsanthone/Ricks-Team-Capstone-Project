import GameObject from "../Engine/GameObject.js";

class OriginCoordinatesScreenSpaceGameObject extends GameObject {
  constructor(size = 10) {
    super();
    this.size = size;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.moveTo(0, -this.size);
    ctx.lineTo(0, this.size);
    ctx.moveTo(-this.size, 0);
    ctx.lineTo(this.size, 0);
    ctx.stroke();

    // Display origin coordinates
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText("(0, 0)", this.size + 2, this.size + 25);

    // Display "Screen space" text in the top left corner
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText("Screen space", 10, 20);
  }
}

export default OriginCoordinatesScreenSpaceGameObject;
