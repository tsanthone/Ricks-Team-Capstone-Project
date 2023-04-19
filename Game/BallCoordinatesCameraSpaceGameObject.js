import GameObject from "../Engine/GameObject.js";
import Text from "../Engine/Text.js";
import TextDraw from "../engine/TextDraw.js";

class BallCoordinatesCameraSpaceGameObject extends GameObject {
  constructor(ball, screenWidth, screenHeight) {
    super();
    this.ball = ball;
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;

    this.components.push(
      new Text(
        this,
        this.ball.x,
        this.ball.y,
        `(${(this.ball.x - screenWidth / 2).toFixed(2)}, ${(this.ball.y - screenHeight / 2).toFixed(2)})`,
        "16px Arial"
      )
    );
    this.components.push(new TextDraw(this, "white", "white"));
  }

  update() {
    const textComponent = this.getComponent("Text");
    textComponent.text = `(${(this.ball.x - this.screenWidth / 2).toFixed(2)}, ${(-1 * (this.ball.y - this.screenHeight / 2)).toFixed(2)})`;

    // Update the position of the text to follow the ball
    textComponent.x = this.ball.x + 15;
    textComponent.y = this.ball.y - 15;
  }
}

export default BallCoordinatesCameraSpaceGameObject;
