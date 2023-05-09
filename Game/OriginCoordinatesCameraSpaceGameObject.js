// Import the GameObject class from the engine
import GameObject from "../Engine/GameObject.js";

// Define a new class for displaying the origin coordinates in camera space
class OriginCoordinatesCameraSpaceGameObject extends GameObject {
  // The constructor takes in the screen width and height, and an optional size parameter for the crosshair
  constructor(screenWidth, screenHeight, size = 10) {
    super(); // Call the constructor of the GameObject superclass

    // Initialize some properties with the provided parameters
    this.size = size;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
  }

  // Override the draw method to specify how to draw the GameObject
  draw(ctx) {
    // Begin a new path for the crosshair
    ctx.beginPath();
    // Set the stroke color and line width for the crosshair
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;

    // Draw a vertical line through the center of the screen
    ctx.moveTo(this.screenWidth / 2, this.screenHeight / 2 - this.size);
    ctx.lineTo(this.screenWidth / 2, this.screenHeight / 2 + this.size);
    // Draw a horizontal line through the center of the screen
    ctx.moveTo(this.screenWidth / 2 - this.size, this.screenHeight / 2);
    ctx.lineTo(this.screenWidth / 2 + this.size, this.screenHeight / 2);

    // Stroke the lines to draw the crosshair
    ctx.stroke();

    // Set the fill color and font for the text
    ctx.fillStyle = "white";
    ctx.font = "14px Arial";

    // Display the origin coordinates next to the crosshair
    ctx.fillText("(0, 0)", this.screenWidth / 2 + this.size + 2, this.screenHeight / 2 - this.size + 25);

    // Display "Camera space" text in the top left corner
    ctx.fillText("Camera space", 10, 20);
  }
}

// Export the class so it can be used elsewhere
export default OriginCoordinatesCameraSpaceGameObject;
