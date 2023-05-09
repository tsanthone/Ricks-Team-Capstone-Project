// Import the GameObject class from the engine
import GameObject from "../Engine/GameObject.js";

// Define a new class for displaying the origin coordinates in world space
class OriginDisplayGameObject extends GameObject {
  // The constructor takes an optional size parameter for the crosshair
  constructor(size = 10) {
    super(); // Call the constructor of the GameObject superclass
    this.size = size; // Initialize the size property with the provided parameter
  }

  // Override the draw method to specify how to draw the GameObject
  draw(ctx) {
    // Get the height of the canvas from the context
    const canvasHeight = ctx.canvas.height;

    // Save the current context state to the stack
    ctx.save();

    // Translate the context origin to the bottom left corner of the canvas
    ctx.translate(0, canvasHeight);

    // Begin a new path for the crosshair
    ctx.beginPath();
    // Set the stroke color and line width for the crosshair
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    // Draw the vertical line of the crosshair
    ctx.moveTo(0, -this.size);
    ctx.lineTo(0, this.size);
    // Draw the horizontal line of the crosshair
    ctx.moveTo(-this.size, 0);
    ctx.lineTo(this.size, 0);
    // Stroke the lines to draw the crosshair
    ctx.stroke();

    // Set the fill color and font for the text
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    // Display the origin coordinates next to the crosshair
    ctx.fillText("(0, 0)", this.size + 2, -this.size - 5);

    // Restore the context state from the stack, undoing the translate operation
    ctx.restore();

    // Display "World space" text in the top left corner
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText("World space", 10, 20);
  }
}

// Export the class so it can be used elsewhere
export default OriginDisplayGameObject;
