import GameObject from "../Engine/GameObject.js";
import Rectangle from "../Engine/Rectangle.js";

class GridOverlayGameObject extends GameObject {
  constructor(gridSize = 50) {
    super();
    this.gridSize = gridSize;
  }

  draw(ctx) {
    const canvas = document.querySelector("canvas");
    ctx.strokeStyle = "#999";
    ctx.lineWidth = 1;

    for (let x = 0; x <= canvas.width; x += this.gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }

    for (let y = 0; y <= canvas.height; y += this.gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }
  }
}

export default GridOverlayGameObject;
