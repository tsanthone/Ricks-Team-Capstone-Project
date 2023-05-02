import GameObject from "../Engine/GameObject.js";

class OriginCoordinatesCameraSpaceGameObject extends GameObject {
  constructor(screenWidth, screenHeight, size = 10) {
    super();
    this.size = size;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.moveTo(this.screenWidth / 2, this.screenHeight / 2 - this.size);
    ctx.lineTo(this.screenWidth / 2, this.screenHeight / 2 + this.size);
    ctx.moveTo(this.screenWidth / 2 - this.size, this.screenHeight / 2);
    ctx.lineTo(this.screenWidth / 2 + this.size, this.screenHeight / 2);
    ctx.stroke();

    // Display origin coordinates
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText("(0, 0)", this.screenWidth / 2 + this.size + 2, this.screenHeight / 2 - this.size + 25);

    // Display "Camera space" text in the top left corner
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText("Camera space", 10, 20);
  }
}

export default OriginCoordinatesCameraSpaceGameObject;
