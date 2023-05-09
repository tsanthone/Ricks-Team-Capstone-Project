// Importing necessary classes from the game engine
import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../Engine/TextDraw.js";

// Define a new class for displaying the mouse coordinates in screen space
class MouseCoordinatesDisplay extends GameObject {
  constructor(screenWidth, screenHeight, marginX = 20, marginY = 20) {
    super(); // Call the constructor of the GameObject superclass

    // Initialize some properties with the provided parameters
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
    this.marginX = marginX;
    this.marginY = marginY;

    // Add a Text component to display the coordinates at a position offset from the screen corner
    this.components.push(
      new Text(this, screenWidth - marginX, screenHeight - marginY, "", "16px Arial")
    );

    // Add a TextDraw component to handle the drawing of the text
    this.components.push(new TextDraw(this, "white", "white"));

    // Initialize the mouse coordinates to (0,0)
    this.mouseX = 0;
    this.mouseY = 0;

    // Begin tracking the mouse position
    this.trackMouse();
  }

  // Attach a listener to the mousemove event to update the mouse position
  trackMouse() {
    document.addEventListener("mousemove", (event) => {
      this.mouseX = event.clientX;
      this.mouseY = this.screenHeight - event.clientY;
    });
  }

  // Measure the width of a string of text in the given font
  measureTextWidth(text, font) {
    const ctx = document.createElement("canvas").getContext("2d");
    ctx.font = font;
    return ctx.measureText(text).width;
  }

  // Called every frame to update the GameObject's state
  update() {
    const textComponent = this.getComponent("Text");

    // Update the text with the current mouse coordinates
    const text = `Mouse: (${this.mouseX.toFixed(2)}, ${this.mouseY.toFixed(2)})`;

    // Measure the width of the text
    const textWidth = this.measureTextWidth(text, textComponent.font);

    // Update the text and its position
    textComponent.text = text;
    textComponent.x = this.screenWidth - this.marginX - textWidth;
    textComponent.y = this.screenHeight - this.marginY;
  }
}

// Export the class so it can be used elsewhere
export default MouseCoordinatesDisplay;
