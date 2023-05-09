// Importing necessary classes
import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

// The AIPaddleCoordinatesObjectSpace class inherits from the GameObject class
class AIPaddleCoordinatesObjectSpace extends GameObject {
  // The constructor takes in the aiPaddle object, the ball object, and the screen height
  constructor(aiPaddle, ball, screenHeight) {
    super(); // Call the constructor of the superclass, GameObject
    // Store the AI paddle object, ball object, and the screen height
    this.aiPaddle = aiPaddle;
    this.ball = ball;
    this.screenHeight = screenHeight;

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
    // Calculate the position of the AI paddle relative to the ball
    const posX = this.aiPaddle.x - this.ball.x;
    const posY = (this.screenHeight - this.aiPaddle.y) - (this.screenHeight - this.ball.y);
    // Update the text component's text property to display the current position of the AI paddle
    textComponent.text = `AI Paddle: (${posX.toFixed(2)}, ${posY.toFixed(2)})`;
    // Update the position of the text on the screen
    textComponent.x = 10;
    textComponent.y = 50;
  }
}

// Export AIPaddleCoordinatesObjectSpace so it can be used in other files
export default AIPaddleCoordinatesObjectSpace;
