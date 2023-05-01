import GameObject from "../Engine/GameObject.js";

class OriginDisplayGameObject extends GameObject {
  constructor(size = 10) {
    super();
    this.size = size;
  }

  draw(ctx) {
    // Get canvas height
    const canvasHeight = ctx.canvas.height;

    // Translate context to the bottom left corner
    ctx.save();
    ctx.translate(0, canvasHeight);

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.moveTo(0, -this.size);
    ctx.lineTo(0, this.size);
    ctx.moveTo(this.size, 0);
    ctx.lineTo(-this.size, 0);
    ctx.stroke();

    // Display origin coordinates
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText("(0, 0)", this.size + 2, -this.size - 5);

    // Restore context
    ctx.restore();

    // Display "World space" text in the top left corner
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText("World space", 10, 20);
  }
}

export default OriginDisplayGameObject;
