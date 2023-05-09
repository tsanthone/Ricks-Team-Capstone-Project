// Import necessary classes from the game engine
import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

// Define a new class to display the user paddle's coordinates in world space
class UserPaddleCoordinatesWorldSpace extends GameObject {
  // The constructor takes a userPaddle object and screenHeight as parameters
  constructor(userPaddle, screenHeight) {
    super(); // Call the constructor of the GameObject superclass
    // Initialize properties with provided parameters
    this.userPaddle = userPaddle;
    this.screenHeight = screenHeight;

    // Add a Text component to display the coordinates
    this.components.push(
      new Text(this, 0, 0, "", "16px Arial")
    );
    // Add a TextDraw component to handle rendering of the Text component
    this.components.push(new TextDraw(this, "white", "white"));
  }

  // Override the update method to specify how to update the GameObject
  update() {
    // Get the Text component
    const textComponent = this.getComponent("Text");

    // Calculate the user paddle's y-coordinate in world space
    const posY = this.screenHeight - this.userPaddle.y;

    // Update the Text component with the user paddle's coordinates in world space
    textComponent.text = `User Paddle: (${this.userPaddle.x.toFixed(2)}, ${posY.toFixed(2)})`;

    // Set the position of the Text component
    textComponent.x = 10;
    textComponent.y = 80;
  }
}

// Export the class so it can be used elsewhere
export default UserPaddleCoordinatesWorldSpace;
