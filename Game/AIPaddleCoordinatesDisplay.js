// Importing necessary classes
import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

// The AIPaddleCoordinatesDisplay class inherits from the GameObject class
class AIPaddleCoordinatesDisplay extends GameObject {
  // The constructor takes in the aiPaddle object
  constructor(aiPaddle) {
    super(); // Call the constructor of the superclass, GameObject
    // Store the AI paddle object
    this.aiPaddle = aiPaddle;

    // Push new components to the GameObject's components array
    // A Text component to hold and manage the text
    this.components.push(
      new Text(this, 0, 0, "", "16px Arial")
    );
    // A TextDraw component to handle the drawing of the text
    this.components.push(new TextDraw(this, "white", "white"));
  }

  // Override the update method of the superclass
  update() {
    // Get the Text component from the GameObject's components array
    const textComponent = this.getComponent("Text");
    // Update the text component's text property to display the current position of the AI paddle
    textComponent.text = `AI Paddle: (${this.aiPaddle.x.toFixed(2)}, ${this.aiPaddle.y.toFixed(2)})`;
    // Update the position of the text on the screen
    textComponent.x = 10;
    textComponent.y = 50;
  }
}

// Export AIPaddleCoordinatesDisplay so it can be used in other files
export default AIPaddleCoordinatesDisplay;
