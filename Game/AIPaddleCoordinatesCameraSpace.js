// Importing necessary classes
import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../Engine/TextDraw.js";

// AIPaddleCoordinatesCameraSpace class inherits from GameObject
class AIPaddleCoordinatesCameraSpace extends GameObject {
  // The constructor takes in the aiPaddle object and screen dimensions
  constructor(aiPaddle, screenWidth, screenHeight) {
    super(); // Call the constructor of the superclass, GameObject
    // Store the AI paddle object and screen dimensions
    this.aiPaddle = aiPaddle;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    // Push new components to the GameObject's components array
    // A Text component to hold and manage the text
    this.components.push(
      new Text(this, 10, 50, "", "16px Arial")
    );
    // A TextDraw component to handle the drawing of the text
    this.components.push(new TextDraw(this, "white", "white"));
  }

  // Override the update method of the superclass
  update() {
    // Get the Text component from the GameObject's components array
    const textComponent = this.getComponent("Text");
    // Compute the center of the screen
    const centerX = this.screenWidth / 2;
    const centerY = this.screenHeight / 2;

    // Compute the position of the AI paddle relative to the center of the screen
    const relativeX = this.aiPaddle.x - centerX;
    const relativeY = centerY - this.aiPaddle.y;

    // Update the text component's text property to display the relative position of the AI paddle
    textComponent.text = `AI Paddle: (${relativeX.toFixed(2)}, ${relativeY.toFixed(2)})`;
  }
}

// Export AIPaddleCoordinatesCameraSpace so it can be used in other files
export default AIPaddleCoordinatesCameraSpace;
