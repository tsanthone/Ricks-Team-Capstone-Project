// Importing necessary classes
import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

// The AIPaddleCoordinatesWorldSpace class inherits from the GameObject class
class AIPaddleCoordinatesWorldSpace extends GameObject {
  // The constructor takes in the aiPaddle object and the screen height
  constructor(aiPaddle, screenHeight) {
    super(); // Call the constructor of the superclass, GameObject
    // Store the AI paddle object and the screen height
    this.aiPaddle = aiPaddle;
    this.screenHeight = screenHeight;

    // Push new components to the GameObject's components array
    // A Text component to hold and manage the text
    this.components.push(new Text(this, 0, 0, "", "16px Arial"));
    // A TextDraw component to handle the drawing of the text
    this.components.push(new TextDraw(this, "white", "white"));
  }

  // Override the update method of the superclass
  update() {
    // Get the Text component from the GameObject's components array
    const textComponent = this.getComponent("Text");
    // Calculate the y position of the AI paddle in world space by subtracting the y position of the paddle from the screen height
    const posY = this.screenHeight - this.aiPaddle.y;
    // Update the text component's text property to display the current position of the AI paddle in world space
    textComponent.text = `AI Paddle: (${this.aiPaddle.x.toFixed(
      2
    )}, ${posY.toFixed(2)})`;
    // Update the position of the text on the screen
    textComponent.x = 10;
    textComponent.y = 50;
  }
}

// Export AIPaddleCoordinatesWorldSpace so it can be used in other files
export default AIPaddleCoordinatesWorldSpace;
