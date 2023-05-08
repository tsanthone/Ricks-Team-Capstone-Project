import GameObject from "../Engine/GameObject.js";

class MouseCoordinatesDisplayGameObject extends GameObject {
  constructor() {
    super();
    this.mouseX = 0;
    this.mouseY = 0;
  }

  draw(ctx) {
    const canvasWidth = ctx.canvas.width;
    const canvasHeight = ctx.canvas.height;

    ctx.fillStyle = "white";
    ctx.font = "16px Arial";
    ctx.fillText(
      `(${this.mouseX.toFixed(2)}, ${this.mouseY.toFixed(2)})`,
      canvasWidth - 100,
      canvasHeight - 20
    );
  }

  updateMouseCoordinates(x, y) {
    this.mouseX = x;
    this.mouseY = y;
  }
}

export default MouseCoordinatesDisplayGameObject;
