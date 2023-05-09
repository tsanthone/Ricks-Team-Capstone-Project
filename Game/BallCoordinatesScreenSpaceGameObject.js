// Import necessary classes from the game engine
import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

// Define the BallCoordinatesScreenSpaceGameObject class that extends (inherits from) the GameObject class
class BallCoordinatesScreenSpaceGameObject extends GameObject {
  // The constructor function runs when a new instance of the class is created
  constructor(ball, x, y) {
    super(); // Call the constructor method on the parent class (GameObject)

    // Store the passed ball, x, and y as properties of the class instance
    this.ball = ball;
    this.x = x;
    this.y = y;

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

    // Update the text to be the current coordinates of the ball
    textComponent.text = `(${this.ball.x.toFixed(2)}, ${this.ball.y.toFixed(2)})`;

    // Update the position of the text to follow the ball, with the offset given by this.x and this.y
    textComponent.x = this.ball.x + this.x;
    textComponent.y = this.ball.y + this.y;
  }
}

// Export the class so it can be imported and used in other files
export default BallCoordinatesScreenSpaceGameObject;
