// Importing necessary classes from the game engine
import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

// Define the BallCoordinatesDisplayGameObject class that extends (inherits from) the GameObject class
class BallCoordinatesDisplayGameObject extends GameObject {
  // The constructor function runs when a new instance of the class is created
  constructor(ball, x, y, screenHeight) {
    super(); // Call the constructor method on the parent class (GameObject)
    // Store the passed ball, x, y, and screenHeight as properties of the class instance
    this.ball = ball;
    this.x = x;
    this.y = y;
    this.screenHeight = screenHeight;

    // Add a Text component to the game object, setting its position at the given x, y 
    // and the initial text to be the coordinates of the ball
    this.components.push(
      new Text(
        this,
        x,
        y,
        `(${ball.x.toFixed(2)}, ${ball.y.toFixed(2)})`,
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

    // Calculate ball coordinates based on the bottom left corner as the origin
    const bottomLeftX = this.ball.x;
    const bottomLeftY = this.screenHeight - this.ball.y;

    // Update the text to be the coordinates of the ball in this new coordinate system
    textComponent.text = `(${bottomLeftX.toFixed(2)}, ${bottomLeftY.toFixed(2)})`;

    // Update the position of the text to follow the ball, with the offset given by this.x and this.y
    textComponent.x = this.ball.x + this.x;
    textComponent.y = this.ball.y + this.y;
  }
}

// Export the class so it can be imported and used in other files
export default BallCoordinatesDisplayGameObject;
