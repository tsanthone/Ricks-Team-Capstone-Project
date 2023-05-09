// Import necessary classes from the engine
import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js"; 

// Define the BallCoordinateObjectSpaceGameObject class that extends (inherits from) the GameObject class
class BallCoordinateObjectSpaceGameObject extends GameObject {
  // The constructor function runs when a new instance of the class is created
  constructor(ball, offsetX, offsetY) {
    // Call the constructor method on the parent class (GameObject)
    super();
    // Save the ball, offsetX, and offsetY as properties of the class instance
    this.ball = ball;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    // Add a Text component to the game object, setting its position relative to the ball's position
    this.components.push(
      new Text(
        this,
        ball.x + offsetX,
        ball.y + offsetY,
        `(0, 0)`,
        "16px Arial"
      )
    );
    // Add a TextDraw component to handle rendering of the text
    this.components.push(new TextDraw(this, "white", "white"));
  }

  // The update method is called every frame
  update() {
    // Retrieve the Text component from the game object
    const textComponent = this.getComponent("Text");

    // Update the position of the text to follow the ball, applying the specified offsets
    textComponent.x = this.ball.x + this.offsetX;
    textComponent.y = this.ball.y + this.offsetY;
  }
}

// Export the class so it can be imported and used in other files
export default BallCoordinateObjectSpaceGameObject;
