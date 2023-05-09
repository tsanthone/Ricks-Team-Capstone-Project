// Import necessary classes from the game engine
import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../Engine/TextDraw.js";

// Define a new class to display the user paddle's coordinates in camera space
class UserPaddleCoordinatesCameraSpace extends GameObject {
  // The constructor takes a userPaddle object and screen dimensions as parameters
  constructor(userPaddle, screenWidth, screenHeight) {
    super(); // Call the constructor of the GameObject superclass
    // Initialize properties with provided parameters
    this.userPaddle = userPaddle;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    // Add a Text component to display the coordinates
    this.components.push(
      new Text(this, 10, 80, "", "16px Arial")
    );
    // Add a TextDraw component to handle rendering of the Text component
    this.components.push(new TextDraw(this, "white", "white"));
  }

  // Override the update method to specify how to update the GameObject
  update() {
    // Get the Text component
    const textComponent = this.getComponent("Text");
    // Calculate the center of the screen
    const centerX = this.screenWidth / 2;
    const centerY = this.screenHeight / 2;

    // Calculate the user paddle's position relative to the center of the screen (camera space)
    const relativeX = this.userPaddle.x - centerX;
    const relativeY = centerY - this.userPaddle.y;

    // Update the Text component with the user paddle's coordinates in camera space
    textComponent.text = `User Paddle: (${relativeX.toFixed(2)}, ${relativeY.toFixed(2)})`;
  }
}

// Export the class so it can be used elsewhere
export default UserPaddleCoordinatesCameraSpace;
