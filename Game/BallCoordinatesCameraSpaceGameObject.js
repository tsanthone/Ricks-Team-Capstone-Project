// Import necessary classes from the engine
import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

// Define the BallCoordinatesCameraSpaceGameObject class that extends (inherits from) the GameObject class
class BallCoordinatesCameraSpaceGameObject extends GameObject {
  // The constructor function runs when a new instance of the class is created
  constructor(ball, screenWidth, screenHeight) {
    // Call the constructor method on the parent class (GameObject)
    super();
    // Save the ball, screenWidth, and screenHeight as properties of the class instance
    this.ball = ball;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    // Add a Text component to the game object, setting its position at the ball's position
    // and the initial text to be the coordinates of the ball in camera space
    this.components.push(
      new Text(
        this,
        this.ball.x,
        this.ball.y,
        `(${(this.ball.x - screenWidth / 2).toFixed(2)}, ${(this.ball.y - screenHeight / 2).toFixed(2)})`,
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

    // Update the text to be the coordinates of the ball in camera space
    textComponent.text = `(${(this.ball.x - this.screenWidth / 2).toFixed(2)}, ${(-1 * (this.ball.y - this.screenHeight / 2)).toFixed(2)})`;

    // Update the position of the text to follow the ball, with a fixed offset
    textComponent.x = this.ball.x + 15;
    textComponent.y = this.ball.y - 15;
  }
}

// Export the class so it can be imported and used in other files
export default BallCoordinatesCameraSpaceGameObject;
