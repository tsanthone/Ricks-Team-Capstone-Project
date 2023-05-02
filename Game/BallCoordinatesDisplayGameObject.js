import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js"; // Use the correct import

class BallCoordinatesDisplayGameObject extends GameObject {
  constructor(ball, x, y, screenHeight) {
    super();
    this.ball = ball;
    this.x = x;
    this.y = y;
    this.screenHeight = screenHeight;
    this.components.push(
      new Text(
        this,
        x,
        y,
        `(${ball.x.toFixed(2)}, ${ball.y.toFixed(2)})`,
        "16px Arial"
      )
    );
    this.components.push(new TextDraw(this, "white", "white"));
  }

  update() {
    const textComponent = this.getComponent("Text");


    // Calculate ball coordinates based on the bottom left corner origin
    const bottomLeftX = this.ball.x;
    const bottomLeftY = 937 - this.ball.y;

    textComponent.text = `(${bottomLeftX.toFixed(2)}, ${bottomLeftY.toFixed(2)})`;

    // Update the position of the text to follow the ball
    textComponent.x = this.ball.x + this.x;
    textComponent.y = this.ball.y + this.y;
  
}
}

export default BallCoordinatesDisplayGameObject;
