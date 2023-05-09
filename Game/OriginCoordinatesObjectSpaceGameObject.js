// Import the GameObject class from the engine
import GameObject from "../Engine/GameObject.js";

// Define a new class for displaying the origin coordinates in object space
class OriginCoordinatesObjectSpaceGameObject extends GameObject {
  // The constructor takes a ball object, screen dimensions, and an optional size parameter for the crosshair
  constructor(ball, screenWidth, screenHeight, size = 10) {
    super(); // Call the constructor of the GameObject superclass
    this.ball = ball; // Reference to the ball object
    this.screenWidth = screenWidth; // Screen width
    this.screenHeight = screenHeight; // Screen height
    this.size = size; // Initialize the size property with the provided parameter
  }

  // Override the draw method to specify how to draw the GameObject
  draw(ctx) {
    // Calculate center of screen
    const centerX = this.screenWidth / 2;
    const centerY = this.screenHeight / 2;

    // Begin a new path for the crosshair
    ctx.beginPath();
    // Set the stroke color and line width for the crosshair
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    // Draw the vertical line of the crosshair
    ctx.moveTo(centerX, centerY - this.size);
    ctx.lineTo(centerX, centerY + this.size);
    // Draw the horizontal line of the crosshair
    ctx.moveTo(centerX - this.size, centerY);
    ctx.lineTo(centerX + this.size, centerY);
    // Stroke the lines to draw the crosshair
    ctx.stroke();

    // Display origin coordinates, adjusted for the ball's position
    const originX = centerX - this.ball.x;
    const originY = centerY - this.ball.y;
    // Set the fill color and font for the text
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    // Display the origin coordinates next to the crosshair
    ctx.fillText(
      `(${originX.toFixed(2)}, ${-1 * (originY.toFixed(2))})`,
      centerX + this.size + 2,
      centerY - this.size - 5
    );

    // Display "Object space" text in the top left corner
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";
    ctx.fillText("Object space", 10, 20);
  }
}

// Export the class so it can be used elsewhere
export default OriginCoordinatesObjectSpaceGameObject;
